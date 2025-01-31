import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealCard = ({ image, title, rating, price, id }) => {
  console.log(rating);
  return (
    <div className="overflow-hidden w-[250px] group bg-white rounded-lg shadow-lg">
      <div className="aspect-square relative overflow-hidden">
        <img
          className="object-cover group-hover:scale-110 transition"
          src={image}
          alt="Room"
        />
        <div className="absolute inset-0 bg-gray-500 opacity-10"></div>
      </div>
      <div className="border border-t-0">
        <div className="p-4 md:p-4 flex justify-between">
          <h1 className="text-lg text-gray-700">
            {title.length > 10 ? title.slice(0, 10) : title}
          </h1>
          <p className="text-gray-600 flex gap-2 items-center">
            <span>{rating}</span>
            <span className="rounded-full text-red-500 bg-yellow-400">
              <FaRegStar />
            </span>
          </p>
        </div>
        <div className="flex justify-between pt-0 p-4 items-center">
          <h1 className="text-lg font-semibold text-gray-700">${price}</h1>
          <Link
            to={`/meal/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
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
