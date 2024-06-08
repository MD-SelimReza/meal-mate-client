import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import UploadBtn from "../../../components/shared/Button/UploadBtn";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { imageUpload } from "../../../utils/imageUpload";

const AddMealForm = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [imagePreview, setImagePreview] = useState("");
  const [imageText, setImageText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    const { image } = data;
    const image_url = await imageUpload(image[0]);
    console.log(data, image_url); // You can handle form submission here
  };

  return (
    <div className="mx-auto mt-8 px-4">
      <div className="mt-8 text-center">
        <h2 className="text-3xl mb-2 font-semibold">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Add New Meal
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Fill in the details below to add a new meal.
        </p>
      </div>
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
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Admin email</label>
            <input
              defaultValue={user.email}
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
          <div className="flex">
            <div>
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
            <div>
              {imagePreview && <img src={imagePreview} alt={imageText} />}
              <p>{imageText}</p>
            </div>
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
            {/* <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.image && (
              <span className="text-red-500">Image is required</span>
            )} */}
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
              {...register("like", { required: true })}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
            {errors.like && (
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
            {...register("review", { required: true })}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          {errors.review && (
            <span className="text-red-500">Reviews is required</span>
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
