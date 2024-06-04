import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealCard = ({ image, title, rating, price, id }) => {
  return (
    <Link
      to={`/meal/${id}`}
      className="overflow-hidden group bg-white rounded-lg shadow-lg"
    >
      <div className="min-w-[200px] aspect-square relative">
        <img
          src={image}
          alt=""
          width="200px"
          className="object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
      </div>
      <div className="border border-t-0">
        <div className="p-4 md:p-4 flex justify-between">
          <h1 className="text-xl font-bold text-gray-700">{title}</h1>
          <p className="text-gray-600 flex gap-2 items-center">
            <span className="rounded-full text-red-500 bg-yellow-400">
              <FaRegStar />
            </span>
            <span>{rating}</span>
          </p>
        </div>
        <div className="flex justify-between pt-0 p-4 items-center">
          <h1 className="text-lg font-bold text-gray-700">${price}</h1>
          <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
            Search
          </button>
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
};

export default MealCard;
