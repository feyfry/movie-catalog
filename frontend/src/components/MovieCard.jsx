import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => (
    <div className="bg-white border-4 border-black rounded-xl p-6 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 
        hover:-translate-y-1 transform">
        <h2 className="text-2xl font-black mb-4 text-black">{movie.title}</h2>
        <div className="space-y-2 mb-4">
            <p className="font-bold">
                <span className="bg-[#FEE12B] px-3 py-1 rounded-lg border-2 border-black inline-block">
                    Year: {movie.year}
                </span>
            </p>
            <p className="font-bold">
                <span className="bg-[#93D2FD] px-3 py-1 rounded-lg border-2 border-black inline-block">
                    Genre: {movie.genre}
                </span>
            </p>
        </div>
        <p className="text-gray-700 font-bold mb-6 line-clamp-3">{movie.synopsis}</p>
        <Link
            to={`/movies/${movie.id}`}
            className="inline-block bg-[#FF3EA5] text-white font-black px-4 py-2 
                rounded-lg border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                transition-all duration-200 hover:-translate-y-0.5"
        >
            View Details →
        </Link>
    </div>
);

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string,
        synopsis: PropTypes.string
    }).isRequired
};

export default MovieCard;