// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import useAuth from "../../hooks/useAuth";
// import useAxiosCommon from "../../hooks/useAxiosCommon";

// const CheckOutForm = ({ price }) => {
//   const [error, setError] = useState("");
//   const [clientSecret, setClientSecret] = useState();
//   const [transactionId, setTransactionId] = useState();
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosCommon = useAxiosCommon();
//   const { user } = useAuth();
//   console.log(price);

//   useEffect(() => {
//     axiosCommon.post("/create-payment-intent", { price }).then((res) => {
//       console.log(res.data.clientSecret);
//       setClientSecret(res.data.clientSecret);
//     });
//   }, [axiosCommon, price]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("[error]", error);
//       setError(error.message);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//       setError("");
//     }
//     // confirm payment
//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: user?.displayName || "anonymous",
//             email: user?.email || "anonymous",
//           },
//         },
//       });

//     if (confirmError) {
//       console.log(confirmError);
//     } else {
//       console.log("paymentIntent", paymentIntent);
//       setTransactionId(paymentIntent.id);

//       // now save the payment data in the database
//       const payment = {
//         email: user?.email,
//         transactionId: paymentIntent.id,
//         date: new Date(), // utc date convert. use moment js
//         status: "pending",
//       };
//       const res = await axiosCommon.post("/payments", payment);
//       console.log("payment save", res.data);
//       toast.success("Thank you for the payment");
//     }
//   };

//   return (
// <form onSubmit={handleSubmit}>
//   <CardElement
//     options={{
//       style: {
//         base: {
//           fontSize: "16px",
//           color: "#424770",
//           "::placeholder": {
//             color: "#aab7c4",
//           },
//         },
//         invalid: {
//           color: "#9e2146",
//         },
//       },
//     }}
//   />
//   <div className="px-6 pt-4 pb-4 flex justify-center">
//     <button
//       // disabled={!stripe || !clientSecret}
//       type="submit"
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//     >
//       Purchase
//     </button>
//   </div>
//   <p className="text-red-500">{error}</p>
//   {transactionId && (
//     <p className="text-green-500">Your transaction id: {transactionId}</p>
//   )}
// </form>
//   );
// };

// export default CheckOutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const CheckOutForm = ({ price }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const [transactionId, setTransactionId] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  console.log(price);

  useEffect(() => {
    if (price && price > 0) {
      axiosCommon.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
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

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
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
      console.log(confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: "pending",
      };
      const res = await axiosCommon.post("/payments", payment);
      console.log("payment save", res.data);
      toast.success("Thank you for the payment");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
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
      <div className="px-6 pt-4 pb-4 flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Purchase
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {transactionId && (
        <p className="text-green-500">Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
