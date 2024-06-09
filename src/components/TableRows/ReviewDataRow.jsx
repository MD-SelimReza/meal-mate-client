import EditOutlinedIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";

const ReviewDataRow = ({ meal, reviews }) => {
  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.likes || 5}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {reviews[0]?.comment}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex gap-3 justify-center">
          <button
            className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
            title="Edit"
          >
            <EditOutlinedIcon />
          </button>
          <button
            className="text-red-500 p-2 rounded bg-red-100 hover:text-red-700 focus:outline-none"
            title="Delete"
          >
            <DeleteOutlineIcon />
          </button>
          <button
            className="text-green-500 p-2 rounded bg-green-200 hover:text-green-700 focus:outline-none"
            title="View"
          >
            <VisibilityIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

ReviewDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
  reviews: PropTypes.array,
};

export default ReviewDataRow;
