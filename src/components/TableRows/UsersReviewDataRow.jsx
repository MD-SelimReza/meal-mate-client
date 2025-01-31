import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteModal from "../Modal/DeleteModal";
import { useState } from "react";

const UsersReviewDataRow = ({ meal, handleDelete }) => {
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
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.likes || 5}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.reviews?.length}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex gap-3 justify-center">
          <button
            onClick={openModal}
            className="text-red-500 p-2 rounded bg-red-100 hover:text-red-700 focus:outline-none"
            title="Delete"
          >
            <DeleteOutlineIcon />
          </button>
          <DeleteModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            handleDelete={handleDelete}
            id={meal?._id}
          />
          <Link
            to={`/meal/${meal._id}`}
            className="text-green-500 p-2 rounded bg-green-200 hover:text-green-700 focus:outline-none"
            title="View"
          >
            <VisibilityIcon />
          </Link>
        </div>
      </td>
    </tr>
  );
};

UsersReviewDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default UsersReviewDataRow;
