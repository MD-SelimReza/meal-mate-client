import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            SIGN UP OUR NEWSLETTER
          </h2>
          <p className="mt-2 text-gray-600">
            Subscribe our newsletters now and stay up-to-date with new
            collections
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex items-center">
              <input
                type="email"
                className="w-full px-4 py-3 mr-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
