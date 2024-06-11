import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../StipePayment/CheckOutForm";
import PropTypes from "prop-types";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentModal = ({ price, title, isOpen, onRequestClose }) => {
  if (!isOpen) return null;
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm
        price={price}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        title={title}
      ></CheckOutForm>
    </Elements>
  );
};

PaymentModal.propTypes = {
  price: PropTypes.number,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  title: PropTypes.string,
};

export default PaymentModal;
