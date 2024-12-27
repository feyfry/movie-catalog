import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white border-4 border-black rounded-xl p-6 mb-4
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                    <p className="font-black text-xl">{review.user}</p>
                    <p className="font-bold text-sm bg-[#93D2FD] px-2 py-1 rounded-lg border-2 border-black inline-block">
                        {new Date(review.created_at).toLocaleDateString()}
                    </p>
                </div>
                <div className="bg-[#FEE12B] px-3 py-1 rounded-lg border-2 border-black">
                    <div className="flex items-center space-x-1">
                        <span className="text-black font-black">★</span>
                        <span className="font-black">{review.rating}</span>
                    </div>
                </div>
            </div>
            <p className="font-bold text-gray-700">{review.comment}</p>
        </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired
    }).isRequired
};

export default ReviewCard;