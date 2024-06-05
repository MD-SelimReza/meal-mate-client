import { FaRegEye, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import DemoModal from "../Modal/DemoModal";
import { useState } from "react";

const MealBox = ({ image, description, rating, price, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      to={`/meal/${id}`}
      className="overflow-hidden bg-white rounded-sm shadow-lg group"
    >
      <div className="min-w-[250px] relative">
        <img src={image} alt="" width="250px" className="object-cover" />
        <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={openModal}
            title="Quick view"
            className="duration-300 bg-white p-2 rounded-sm hover:bg-yellow-400"
          >
            <FaRegEye className="size-5" />
          </button>
          <DemoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
      </div>
      <div className="bg-[#DBDDE0]">
        <div className="pt-1">
          <div className="flex items-center gap-1 justify-center">
            {Array.from({ length: 5 }, (_, index) => (
              <p
                key={index}
                className={`w-5 h-5 ${index < rating ? " text-red-500" : ""}`}
              >
                <FaRegStar />
              </p>
            ))}
          </div>
          <div className="p-4">
            <h1 className="text-xl text-gray-600">
              {description ? description : "Description"}
              <h1 className="text-lg font-semibold text-gray-700">${price}</h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

MealBox.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default MealBox;
