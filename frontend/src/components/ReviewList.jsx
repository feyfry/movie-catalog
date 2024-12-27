import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import api from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const ReviewList = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Reset reviews saat movieId berubah
    useEffect(() => {
        setReviews([]); // Reset reviews
        setPage(1); // Reset page
        setHasMore(true); // Reset hasMore
        fetchReviews();
    }, [movieId]);

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/films/${movieId}/reviews?page=${page}`);
            if (page === 1) {
                // Jika page 1, langsung set reviews baru
                setReviews(response.data.reviews);
            } else {
                // Jika load more, tambahkan ke reviews yang ada
                setReviews(prev => [...prev, ...response.data.reviews]);
            }
            setHasMore(page < response.data.pages);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    // Update reviews setelah menambah review baru
    // const refreshReviews = async () => {
    //     setPage(1);
    //     setLoading(true);
    //     try {
    //         const response = await api.get(`/films/${movieId}/reviews?page=1`);
    //         setReviews(response.data.reviews);
    //         setHasMore(1 < response.data.pages);
    //     } catch (error) {
    //         console.error('Error refreshing reviews:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    if (loading && page === 1) return <LoadingSpinner />;

    return (
        <div className="bg-white border-4 border-black rounded-xl p-6 mb-8 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black mb-6">Reviews</h3>

            {reviews.length === 0 ? (
                <p className="font-bold text-gray-700 bg-[#93D2FD] p-4 rounded-lg border-4 border-black inline-block">
                    No reviews yet. Be the first to review!
                </p>
            ) : (
                <>
                    <div className="space-y-6">
                        {reviews.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>

                    {hasMore && (
                        <button
                            onClick={loadMore}
                            className="mt-6 bg-[#FEE12B] text-black font-black px-6 py-3 
                                rounded-lg border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                                transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Load More Reviews →
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

ReviewList.propTypes = {
    movieId: PropTypes.number.isRequired
};

export default ReviewList;