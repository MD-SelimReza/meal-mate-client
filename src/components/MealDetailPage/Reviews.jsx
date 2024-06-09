import { useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";

const Reviews = ({ reviews }) => {
  const [expandedReviews, setExpandedReviews] = useState(
    new Array(reviews?.length).fill(false)
  );

  const [shownReviews, setShownReviews] = useState(2);

  const showMoreReviews = () => {
    setShownReviews(reviews?.length);
  };

  const toggleReview = (index) => {
    setExpandedReviews((prev) =>
      prev.map((expanded, idx) => (idx === index ? !expanded : expanded))
    );
  };

  return (
    <div className="border p-2">
      <h3 className="text-xl font-semibold mb-4">Reviews</h3>

      {reviews && reviews?.length > 0 ? (
        reviews.slice(0, shownReviews).map((review, idx) => (
          <div key={idx}>
            <Rating
              name="read-only"
              sx={{
                fontSize: "20px",
              }}
              value={review?.rating}
              readOnly
            />
            <div className="flex gap-5">
              <p>{review?.name ? review.name : "Selim"}</p>
              <span>|</span>
              <p>{review?.date ? review.date : "02 Apr, 2021"}</p>
            </div>
            {expandedReviews[idx] ? (
              review?.comment.split("\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 my-2">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-600 mt-2">
                {review?.comment.split("\n").slice(0, 1).join("\n")}
              </p>
            )}
            {review.comment.includes("\n") && (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => toggleReview(idx)}
              >
                {expandedReviews[idx] ? "Read Less" : "Read More"}
              </button>
            )}
            {idx < reviews.length - 1 && <hr className="my-4" />}
          </div>
        ))
      ) : (
        <p className="text-gray-600">There are no reviews for this product.</p>
      )}

      {reviews?.length > shownReviews && (
        <button
          className="text-blue-500 hover:underline mt-4"
          onClick={showMoreReviews}
        >
          Show More Reviews
        </button>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
