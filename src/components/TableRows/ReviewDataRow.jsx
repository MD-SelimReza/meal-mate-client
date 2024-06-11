import EditOutlinedIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UpdateMealModal from "../Modal/UpdateMealModal";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";

const ReviewDataRow = ({ meal, reviews, handleUpdate, handleDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  console.log(reviews);
  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.likes || 5}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {reviews[0]?.comment?.slice(0, 50)}...
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex gap-3 justify-center">
          <div>
            <button
              onClick={openModal}
              className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
              title="Edit"
            >
              <EditOutlinedIcon />
            </button>
            <UpdateMealModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              handleUpdate={handleUpdate}
              id={meal?._id}
            />
          </div>
          <div>
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
          </div>
          <Link
            to={`/meal/${meal?._id}`}
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

ReviewDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default ReviewDataRow;
