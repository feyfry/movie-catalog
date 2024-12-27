import { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const { isAuthenticated } = useAuth();
    const [formData, setFormData] = useState({
        rating: 5,
        comment: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            toast.error('Please login to add a review');
            return;
        }

        try {
            await api.post('/reviews', {
                movie_id: movieId,
                ...formData
            });
            toast.success('Review added successfully');
            setFormData({ rating: 5, comment: '' });

            setTimeout(() => {
                if (onReviewAdded) onReviewAdded();
            }, 500);

        } catch (error) {
            if (error.response?.status === 400 && error.response?.data?.error === 'You have already reviewed this movie') {
                toast.error('You have already reviewed this movie');
            } else {
                console.error('Review error:', error);
                toast.error('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white border-4 border-black rounded-xl p-6 mb-8 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black mb-6">Add Your Review</h3>

            <div className="mb-6">
                <label className="block text-xl font-bold mb-3">Rating</label>
                <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full bg-[#FEE12B] border-4 border-black rounded-lg p-3 
                        font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                        transition-all duration-200"
                >
                    {[5, 4, 3, 2, 1].map(num => (
                        <option key={num} value={num} className="font-bold">
                            {num} {num === 1 ? 'Star' : 'Stars'}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-xl font-bold mb-3">Comment</label>
                <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-white border-4 border-black rounded-lg p-3 
                        font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                        transition-all duration-200"
                    rows="4"
                    required
                    placeholder="Share your thoughts about this movie..."
                />
            </div>

            <button
                type="submit"
                disabled={!isAuthenticated}
                className={`w-full p-4 rounded-lg border-4 border-black font-black text-xl
                    ${isAuthenticated
                        ? 'bg-[#FF3EA5] text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                    transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
            >
                {isAuthenticated ? 'Submit Review →' : 'Login to Review'}
            </button>

            {!isAuthenticated && (
                <p className="mt-4 text-center font-bold text-gray-700">
                    You need to be logged in to submit a review
                </p>
            )}
        </form>
    );
};

ReviewForm.propTypes = {
    movieId: PropTypes.number.isRequired,
    onReviewAdded: PropTypes.func
};

export default ReviewForm;
