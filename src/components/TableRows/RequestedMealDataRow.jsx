import DeleteOutlineIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

const RequestedMealDataRow = ({ meal }) => {
  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.category}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        ${meal?.price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.rating}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        <button
          title="Delete"
          className="text-red-500 p-2 rounded bg-red-100 hover:text-red-700"
        >
          <DeleteOutlineIcon />
        </button>
      </td>
    </tr>
  );
};

RequestedMealDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default RequestedMealDataRow;
