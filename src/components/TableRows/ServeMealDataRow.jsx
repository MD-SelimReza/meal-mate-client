import PropTypes from "prop-types";

const ServeMealDataRow = ({ meal }) => {
  return (
    <tr key={meal._id} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.name || "Selim"}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        {meal?.email || "random@custom.com"}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
        Pending
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex gap-3 justify-center">
          <button
            className="text-blue-500 p-2 rounded bg-blue-100 hover:text-blue-700 focus:outline-none"
            title="Edit"
          >
            Delivered
          </button>
        </div>
      </td>
    </tr>
  );
};

ServeMealDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default ServeMealDataRow;
