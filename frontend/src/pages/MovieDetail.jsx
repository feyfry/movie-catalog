import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0);

    const fetchMovie = async () => {
        try {
            const response = await api.get(`/films/${id}`);
            setMovie(response.data);
        } catch (error) {
            console.error('Error fetching movie:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fungsi untuk memaksa refresh komponen ReviewList
    const handleReviewAdded = () => {
        fetchMovie();
        setRefreshKey(prevKey => prevKey + 1); // Increment refresh key
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (!movie) return <div className="text-2xl font-black">Movie not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white border-4 border-black rounded-xl p-8 mb-8 
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h1 className="text-4xl font-black mb-6">{movie.title}</h1>
                <div className="space-y-3 mb-6">
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
                <p className="font-bold text-gray-700">{movie.synopsis}</p>
            </div>

            <ReviewForm
                movieId={parseInt(id)}
                onReviewAdded={handleReviewAdded}
            />
            <ReviewList
                key={refreshKey}
                movieId={parseInt(id)}
            />
        </div>
    );
};

export default MovieDetail;
