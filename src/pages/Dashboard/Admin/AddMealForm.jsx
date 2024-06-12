// {
//   name: 'selim',
//   email: 'selim@reza.com',
//   title: "Pasta Primavera",
//   category: "Lunch",
//   image: 'https://i.ibb.co/FHj2GY5/16-2.jpg',
//   ingredients: [
//   "Pasta",
//   "Broccoli",
//   "Carrots",
//   "Bell peppers",
//   "Zucchini",
//   "Cherry tomatoes",
//   "Parmesan cheese",
//   "Olive oil"
//   ],
//   description: "Pasta Primavera is a classic Italian dish featuring pasta and fresh vegetables. This vibrant and colorful dish is bursting with flavor and nutrients. It's a perfect choice for a healthy and satisfying lunch or dinner.",
//   price: 150,
//   likes: 10,
//   postTime: ''
//   reviews: [
//   {
//   rating: 5,
//   comment: "Absolutely delicious! Loved the combination of flavors."
//   },
//   {
//   rating: 4,
//   comment: "Healthy and filling. Would definitely make it again."
//   }
//   ]
//   },

import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import UploadBtn from "../../../components/shared/Button/UploadBtn";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { imageUpload } from "../../../utils/imageUpload";
import SectionTitle from "../../../components/shared/SectionTitle";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddMealForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const [imagePreview, setImagePreview] = useState("");
  const [imageText, setImageText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (mealData) => {
      const { data } = await axiosSecure.post("/meals", mealData);
      return data;
    },

    onSuccess: () => {
      reset();
      toast.success("Meal Added Successfully!");
    },
  });

  const onSubmit = async (data) => {
    const {
      name,
      email,
      title,
      category,
      image,
      ingredients,
      description,
      price,
      likes,
      postTime,
      rating,
      comment,
    } = data;
    const reviews = [];
    console.log(ingredients.split(","));
    const review = {
      rating: rating,
      comment: comment,
    };

    reviews.push(...reviews, review);

    console.log(review, likes);
    const image_url = await imageUpload(image);
    console.log(data, image_url);
    const mealData = {
      name: name,
      email: email,
      title: title,
      category: category,
      image: image_url,
      ingredients: ingredients.split(","),
      description: description,
      price: price,
      likes: likes,
      postTime: postTime,
      reviews: reviews,
    };
    console.table(mealData);
    try {
      await mutateAsync(mealData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto mt-8 px-4">
      <SectionTitle
        title="Add New Meal"
        description="Fill in the details below to add a new meal."
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Admin name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              {...register("name")}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Admin email</label>
            <input
              defaultValue={user.email}
              {...register("email")}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select
              {...register("category", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Price</label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="sm:overflow-hidden">
              <label className="block mb-2 font-semibold">Post Time</label>
              <Controller
                control={control}
                name="postTime"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                    selected={field.value || startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      field.onChange(date);
                    }}
                  />
                )}
              />
              <div>
                {errors.postTime && (
                  <span className="text-red-500">Post Time is required</span>
                )}
              </div>
            </div>
            {imagePreview ? (
              <div className="w-full h-24">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    className="size-full"
                    alt={imageText}
                  />
                )}
                <p>{imageText}</p>
              </div>
            ) : (
              <div className="border p-4 w-full font-semibold">
                Image preview
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Ingredients</label>
            <textarea
              {...register("ingredients", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            ></textarea>
            <small className="block text-gray-600">
              Enter ingredients separated by commas (,)
            </small>
            {errors.ingredients && (
              <span className="text-red-500">Ingredients are required</span>
            )}
          </div>
          <div>
            <label className="block mb-2 font-semibold">Image Upload</label>
            <div className="w-full border border-gray-300 rounded-md p-3">
              <Controller
                control={control}
                name="image"
                rules={{ required: true }}
                render={({ field }) => (
                  <UploadBtn
                    hook={field}
                    setImagePreview={setImagePreview}
                    setImageText={setImageText}
                  />
                )}
              />
            </div>
            {errors.image && (
              <span className="text-red-500">The image field is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Likes</label>
            <input
              type="number"
              {...register("likes", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.likes && (
              <span className="text-red-500">Likes is required</span>
            )}
          </div>
          <div>
            <label className="block mb-2 font-semibold">Rating</label>
            <input
              type="number"
              {...register("rating", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.rating && (
              <span className="text-red-500">Rating is required</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Reviews</label>
          <textarea
            {...register("comment", { required: true })}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.comment && (
            <span className="text-red-500">Review is required</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMealForm;
