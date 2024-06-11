import DeleteOutlineIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../Modal/DeleteModal";

const RequestedMealDataRow = ({ meal, handleDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.status || "Silver"}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.likes || 5}
      </td>
      <td className="px-6 py-4 flex flex-col whitespace-no-wrap border-b border-gray-200 text-center">
        <span>{meal?.reviews[0]?.comment}</span>
        {meal?.reviews.length > 0 ? (
          <Link
            to={`/meal/${meal._id}`}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            See More
          </Link>
        ) : (
          ""
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        <button
          onClick={openModal}
          title="Delete"
          className="text-red-500 p-2 rounded bg-red-100 hover:text-red-700"
        >
          <DeleteOutlineIcon />
        </button>
        <DeleteModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          handleDelete={handleDelete}
          id={meal?._id}
        />
      </td>
    </tr>
  );
};

RequestedMealDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default RequestedMealDataRow;
