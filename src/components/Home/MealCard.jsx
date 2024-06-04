import PropTypes from "prop-types";
import CommonBtn from "../shared/Button/CommonBtn";
import { Link } from "react-router-dom";

const MealCard = ({ image, title, rating, price, description, id }) => {
  return (
    <Link
      to={`/meal/${id}`}
      className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
    >
      <div>
        <img src={image} alt="" width="250px" />
      </div>
      <div className="p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex mt-2 items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              } fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-between mt-3 items-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300 md:text-xl">
            ${price}
          </h1>
          <CommonBtn label="Details" />
        </div>
      </div>
    </Link>
  );
};

MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default MealCard;
