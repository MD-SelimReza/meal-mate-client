import { FaHeart, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const UpcomingMealCard = ({ image, description, rating, id }) => {
  return (
    <div
      to={`/meal/${id}`}
      className="overflow-hidden bg-white rounded-lg shadow-lg group"
    >
      <div className="h-[200px] relative">
        <img
          src={image}
          alt=""
          width="300px"
          className="object-cover h-[200px] group-hover:scale-105 transition duration-500"
        />
        <p className="absolute text-red-600 right-4 top-4">
          <div className="relative">
            <span>
              <FaHeart className="size-5" />
            </span>
            <span className="absolute -top-4 -right-2">1</span>
          </div>
        </p>
        <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
          <p className="bg-white py-1 px-3">Coming meal</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-xl text-gray-600">
              {description ? description : "Description"}
            </h1>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-red-500 bg-yellow-400 rounded-full">
              <FaRegStar />
            </span>
            <span>{rating}</span>
          </div>
        </div>
        <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
          Quick view
        </button>
      </div>
    </div>
  );
};

UpcomingMealCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default UpcomingMealCard;
