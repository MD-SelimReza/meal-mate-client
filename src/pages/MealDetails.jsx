import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import ReviewSection from "../components/MealDetailPage/ReviewSection";
import { Helmet } from "react-helmet-async";

const MealDetails = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const { id: mealId } = useParams();
  const axiosCommon = useAxiosCommon();
  const { data } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: async () => {
      const { data } = await axiosCommon(`/meal/${mealId}`);
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>{data.title} Details</title>
      </Helmet>
      <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full gap-5 md:flex">
          <div className="md:w-2/5">
            <img
              className="w-full object-cover"
              src="https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg" // replace with the correct path to your image
              alt="Meal"
            />
          </div>
          <div className="bg-white md:w-3/5 z-10">
            <h2 className="text-gray-600 text-2xl">
              Pretium Euismod Dui Fermentum Quis
            </h2>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-sm text-gray-600">(2 Reviews)</span>
              <a href="#" className="ml-4 text-sm text-blue-500 underline">
                Write a Review
              </a>
            </div>
            <div className="mt-4">
              <span className="text-2xl text-gray-700 font-semibold">
                $602.00
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Brand:</span> Apple
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Product Code:</span> Product 16
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Reward Points:</span> 600
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Availability:</span>{" "}
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Stock Count:</span> 870
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-l">
                -
              </button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-12 text-center border-t border-b border-gray-200"
              />
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-r">
                +
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded ml-4">
                Basket
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-6 py-2 rounded ml-2">
                ♥
              </button>
              <button
                className={`ml-2 px-6 py-2 rounded ${
                  liked
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                onClick={toggleLike}
              >
                {liked ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReviewSection />
    </div>
  );
};

export default MealDetails;
