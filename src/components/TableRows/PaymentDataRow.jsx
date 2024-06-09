import PropTypes from "prop-types";

const PaymentDataRow = ({ payment }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {payment?.package}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {payment?.date}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        $ {payment?.amount}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b">
        <p
          className={`${
            payment?.badge === "Silver"
              ? "text-blue-500"
              : payment?.badge === "Gold"
              ? "text-orange-500"
              : payment?.badge === "Platinum"
              ? "text-green-500"
              : "text-gray-500"
          } whitespace-no-wrap`}
        >
          {payment?.badge}
        </p>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {payment?.transactionId?.length > 10
          ? payment?.transactionId.slice(0, 8) +
            ".".repeat(payment?.transactionId.length - 10) +
            payment?.transactionId.slice(-5)
          : payment?.transactionId}
      </td>
    </tr>
  );
};

PaymentDataRow.propTypes = {
  payment: PropTypes.object.isRequired,
};

export default PaymentDataRow;
