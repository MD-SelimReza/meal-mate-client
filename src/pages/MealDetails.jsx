import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import ReviewSection from "../components/MealDetailPage/ReviewSection";
import { Helmet } from "react-helmet-async";
import Loader from "../components/shared/Loader";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useBadge from "../hooks/useBadge";
import toast from "react-hot-toast";

const MealDetails = () => {
  const { id: mealId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const [badge] = useBadge();
  const navigate = useNavigate();

  const {
    data: meal = [],
    isLoading: mealLoading,
    refetch,
  } = useQuery({
    queryKey: ["meal", mealId],
    queryFn: async () => {
      const { data } = await axiosSecure(`/meal/${mealId}`);
      setLikedCount(data?.likes);
      return data;
    },
  });

  const handleRequest = async () => {
    if (badge !== "Bronze") {
      const requestedId = meal?._id;
      const requestedMeal = { ...meal, requestedId };

      const { data } = await axiosSecure.post("/request/meal", requestedMeal);

      if (data?.insertedId) {
        toast.success(`${meal?.title} add the basket successfully!`);
      } else {
        toast.success(data);
      }
    } else {
      toast.success("Subscribe one package before adding the basket.");
      navigate("/#package");
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ mealId, like }) => {
      const { data } = await axiosSecure.put(`/like-meal/${mealId}`, like);
      return data;
    },
  });

  console.log("Likes-->", likedCount, meal?.likes);

  const toggleLike = async () => {
    if (liked) {
      setLikedCount(likedCount - 1);
    } else {
      setLikedCount(likedCount + 1);
    }
    setLiked(!liked);
    const like = {
      liked,
    };
    await mutateAsync({ mealId, like });
    refetch();
  };

  if (mealLoading) return <Loader />;

  return (
    <div>
      <Helmet>
        <title>{meal && meal?.title}</title>
      </Helmet>
      <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full gap-5 md:flex items-center">
          <div className="md:w-2/5">
            <img
              className="w-full max-h-[350px] object-cover"
              src={
                meal?.image
                  ? meal?.image
                  : "https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg"
              }
              alt="Meal"
            />
          </div>
          <div className="bg-white md:w-3/5 z-10">
            <h2 className="text-gray-600 text-2xl">{meal.title}</h2>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-sm text-gray-600">
                ({meal?.reviews?.length || 0} Reviews)
              </span>
              <a
                href="#my-review"
                className="ml-4 text-sm text-blue-500 underline"
              >
                Write a Review
              </a>
            </div>
            <div>
              <p>{meal?.description?.slice(0, 100)}</p>
            </div>
            <div className="mt-4">
              <span className="text-2xl text-gray-700 font-semibold">
                Price: ${meal?.price}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Distributor:</span> {meal?.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Category: </span>
                {meal?.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Post Time: </span>
                {meal?.postTime}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Availability: </span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Stock Count:</span> 150
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Like:</span> {likedCount}
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <button
                className={`ml-2 px-6 py-3 rounded ${
                  liked
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                onClick={toggleLike}
              >
                {liked ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button
                onClick={handleRequest}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded ml-4"
              >
                Basket
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReviewSection
        description={meal?.description}
        ingredients={meal?.ingredients}
        initialReviews={meal?.reviews}
        mealId={meal._id}
        refetch={refetch}
      />
    </div>
  );
};

export default MealDetails;
