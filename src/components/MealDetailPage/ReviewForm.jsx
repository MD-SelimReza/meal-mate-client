import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      review,
      rating,
    };
    setReviews([...reviews, newReview]);
    setName("");
    setReview("");
    setRating(0);
  };

  const renderStars = (selectedRating) => {
    return [...Array(5)].map((_, index) => {
      return (
        <button
          type="button"
          key={index}
          className="focus:outline-none"
          onClick={() => setRating(index + 1)}
        >
          {index < selectedRating ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className="text-yellow-500" />
          )}
        </button>
      );
    });
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600">There are no reviews for this product.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold">{r.name}</p>
              <div className="flex items-center">{renderStars(r.rating)}</div>
              <p>{r.review}</p>
            </div>
          ))}
        </div>
      )}
      <h3 className="text-xl font-semibold mt-6">Write A Review</h3>
      <form onSubmit={handleReviewSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex gap-5">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <div className="flex gap-4 items-center">{renderStars(rating)}</div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
