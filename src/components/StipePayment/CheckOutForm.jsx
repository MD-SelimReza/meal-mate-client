import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ price, title, onRequestClose }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (price && price > 0) {
      axiosCommon.post("/create-payment-intent", { price }).then((res) => {
        console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
    }
  }, [axiosCommon, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      setError("");

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        badge: title.split(" ")[0],
        package: title,
        amount: price,
      };
      await axiosCommon.post("/payments", payment);
      toast.success(`Successfully purchase the ${title}`);
      onRequestClose();
      navigate("/dashboard/payment-history");
    }
  };

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[525px] bg-white rounded-lg shadow-lg "
      >
        <div className=" p-8 pb-4">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card number
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-4 border rounded mb-4"
          />
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <hr className="mb-4" />
        <div className="flex mt-4 pb-8 justify-center gap-5">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {
  price: PropTypes.number,
  onRequestClose: PropTypes.func,
  title: PropTypes.string,
};

export default CheckOutForm;
