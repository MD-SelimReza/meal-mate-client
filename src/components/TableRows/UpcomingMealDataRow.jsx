import PropTypes from "prop-types";

const UpcomingMealDataRow = ({ meal }) => {
  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        ${meal?.price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.rating}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <button
          className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
          title="Edit"
        >
          Published
        </button>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <button
          className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
          title="Edit"
        >
          Upcoming
        </button>
      </td>
    </tr>
  );
};

UpcomingMealDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default UpcomingMealDataRow;
