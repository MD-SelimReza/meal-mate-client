import SectionTitle from "../../../components/shared/SectionTitle";
import ReviewDataRow from "../../../components/TableRows/ReviewDataRow";
import { CircularProgress } from "@mui/material";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import toast from "react-hot-toast";

const MyReviews = () => {
  const { user } = useAuth();
  const {
    data,
    isLoading: mealsLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("/meals", "meals");

  const meals = data?.items;
  const axiosSecure = useAxiosSecure();

  const { data: reviews, isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/meals/${user?.email}/reviews`);
      console.log(data);
      return data;
    },
  });

  const { mutateAsync: updateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/request-meal/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Successfully Delete!");
    },
  });

  const { mutateAsync: deleteAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/request-meal/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Successfully Delete!");
    },
  });

  const handleUpdate = async (id) => {
    console.log(id);
    try {
      await updateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await deleteAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="My Reviews Dashboard"
        description="Explore your reviews in a table showcasing meal titles, likes, your review, options to edit or delete, and buttons to view meals."
      />
      {mealsLoading && reviewsLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-left">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-[10%] text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-[40%] text-center">
                      Reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals?.map((meal) => (
                    <ReviewDataRow
                      key={meal._id}
                      meal={meal}
                      reviews={reviews}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <CustomPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
};

export default MyReviews;
