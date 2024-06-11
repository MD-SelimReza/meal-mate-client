import EditOutlinedIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";
import { useState } from "react";
import UpdateMealModal from "../Modal/UpdateMealModal";
import DeleteModal from "../Modal/DeleteModal";
import { Link } from "react-router-dom";

const MealDataRow = ({ meal, handleUpdate, handleDelete }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        Selim Reza
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        ${meal?.price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.rating}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex gap-3 justify-center">
          <div>
            <button
              onClick={() => setUpdateModalIsOpen(true)}
              className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
              title="Edit"
            >
              <EditOutlinedIcon />
            </button>
            <UpdateMealModal
              isOpen={updateModalIsOpen}
              onRequestClose={() => setUpdateModalIsOpen(false)}
              handleUpdate={handleUpdate}
              id={meal?._id}
            />
          </div>
          <div>
            <button
              onClick={() => setDeleteModalIsOpen(true)}
              className="text-red-500 p-2 rounded bg-red-100 hover:text-red-700 focus:outline-none"
              title="Delete"
            >
              <DeleteOutlineIcon />
            </button>
            <DeleteModal
              isOpen={deleteModalIsOpen}
              onRequestClose={() => setDeleteModalIsOpen(false)}
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

MealDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default MealDataRow;
