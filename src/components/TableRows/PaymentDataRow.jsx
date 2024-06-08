import PropTypes from "prop-types";

const PaymentDataRow = ({ meal }) => {
  return (
    <tr key={meal.title} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal.price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal.rating}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {meal.category}
      </td>
    </tr>
  );
};

PaymentDataRow.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default PaymentDataRow;
