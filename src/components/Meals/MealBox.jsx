import { FaRegEye } from "react-icons/fa";
import PropTypes from "prop-types";
import DemoModal from "../Modal/DemoModal";
import { useState } from "react";
import { Rating } from "@mui/material";

const MealBox = ({ meal, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      to={`/meal/${meal?._id}`}
      className="overflow-hidden bg-white rounded-sm shadow-lg group"
    >
      <div className="min-w-[250px] relative">
        <img
          src={meal?.image ? meal?.image : image}
          alt=""
          width="250px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={openModal}
            title="Quick view"
            className="duration-300 bg-white p-2 rounded-sm hover:bg-yellow-400"
          >
            <FaRegEye className="size-5" />
          </button>
          <DemoModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            image={image}
            meal={meal}
          />
        </div>
      </div>
      <div className="bg-[#DBDDE0]">
        <div className="pt-1">
          <div className="flex items-center gap-1 justify-center">
            <Rating
              name="read-only"
              sx={{
                fontSize: "20px",
              }}
              value={meal?.reviews[0]?.rating}
              readOnly
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl text-gray-600">
              {meal?.description.slice(0, 20)}
              <h1 className="text-lg font-semibold text-gray-700">
                ${meal?.price} 100
              </h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

MealBox.propTypes = {
  meal: PropTypes.object.isRequired,
  image: PropTypes.string,
};

export default MealBox;
