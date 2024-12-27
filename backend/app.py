from flask import request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from config import app, db
from models.movie import Movie
from models.user import User
from models.review import Review
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

@app.route('/')
def index():
    return jsonify({
        "message": "Welcome to Movie Catalog API",
        "version": "1.0",
        "endpoints": {
            "GET /api/films": "Get all movies",
            "GET /api/films/{id}": "Get movie detail",
            "GET /api/films/{id}/reviews": "Get movie reviews",
            "POST /api/reviews": "Create new review (requires authentication)",
            "POST /api/register": "Register new user",
            "POST /api/login": "Login user"
        }
    })

# Authentication Routes
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
        
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400
    
    hashed_password = generate_password_hash(data['password'])
    new_user = User(
        username=data['username'],
        email=data['email'],
        password=hashed_password
    )
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    
    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=str(user.id))
        return jsonify({
            'token': access_token,
            'user_id': user.id,
            'username': user.username
        }), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401

# Movie Routes
@app.route('/api/films', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    return jsonify([{
        'id': movie.id,
        'title': movie.title,
        'year': movie.year,
        'genre': movie.genre,
        'synopsis': movie.synopsis
    } for movie in movies])

@app.route('/api/films/<int:id>', methods=['GET'])
def get_movie(id):
    movie = Movie.query.get_or_404(id)
    return jsonify({
        'id': movie.id,
        'title': movie.title,
        'year': movie.year,
        'genre': movie.genre,
        'synopsis': movie.synopsis
    })

@app.route('/api/films/<int:id>/reviews', methods=['GET'])
def get_movie_reviews(id):
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    
    reviews = Review.query.filter_by(movie_id=id)\
        .paginate(page=page, per_page=per_page, error_out=False)
    
    return jsonify({
        'reviews': [{
            'id': review.id,
            'rating': review.rating,
            'comment': review.comment,
            'user': review.user.username,
            'created_at': review.created_at.isoformat()
        } for review in reviews.items],
        'total': reviews.total,
        'pages': reviews.pages,
        'current_page': reviews.page
    })

@app.route('/api/films', methods=['POST'])
@jwt_required()  # Hanya admin yang bisa menambah film
def add_movie():
    data = request.json
    new_movie = Movie(
        title=data['title'],
        year=data['year'],
        synopsis=data.get('synopsis'),
        genre=data.get('genre')
    )
    db.session.add(new_movie)
    db.session.commit()
    return jsonify({'message': 'Movie added successfully', 'id': new_movie.id}), 201

@app.route('/api/reviews', methods=['POST'])
@jwt_required()
def create_review():
    current_user_id = get_jwt_identity()
    data = request.json
    
    # Check if user has already reviewed this movie
    existing_review = Review.query.filter_by(
        movie_id=data['movie_id'],
        user_id=current_user_id
    ).first()
    
    if existing_review:
        return jsonify({'error': 'You have already reviewed this movie'}), 400
    
    new_review = Review(
        movie_id=data['movie_id'],
        user_id=current_user_id,
        rating=data['rating'],
        comment=data['comment']
    )
    
    db.session.add(new_review)
    db.session.commit()
    
    return jsonify({'message': 'Review added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)