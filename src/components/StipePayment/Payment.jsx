import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = ({ price }) => {
  console.log(price);
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm price={price}></CheckOutForm>
    </Elements>
  );
};

export default Payment;
