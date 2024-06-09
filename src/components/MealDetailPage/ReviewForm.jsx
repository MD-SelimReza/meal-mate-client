import { useState } from "react";
import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const ReviewForm = ({ addReview, mealId, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(2);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      email: user?.email,
      name: name,
      comment,
      rating,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    await axiosSecure.post(`/meals/${mealId}/reviews`, newReview);
    refetch();
    toast.success("Review successful");
    console.log(newReview);
    addReview(newReview);
    setName("");
    setComment("");
    setRating(2);
  };

  return (
    <div id="my-review" className="w-full bg-white rounded-lg mt-6">
      <h3 className="text-xl font-semibold">Write A Review</h3>
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Review
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
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

ReviewForm.propTypes = {
  mealId: PropTypes.string,
  addReview: PropTypes.func,
  refetch: PropTypes.func,
};

export default ReviewForm;
