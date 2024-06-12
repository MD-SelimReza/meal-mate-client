import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import UsersReviewDataRow from "../../../components/TableRows/UsersReviewDataRow";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UsersReviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data,
    isLoading: reviewsLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("/meals", "meals");

  const meals = data?.items;

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/review/delete/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Successfully Delete!");
    },
  });

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Users Reviews"
        description="Browse through all reviews in a table format, including details such as meal title, likes, number of reviews, and options to delete or view each meal."
      />
      {reviewsLoading ? (
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
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Total reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals?.map((meal) => (
                    <UsersReviewDataRow
                      key={meal._id}
                      meal={meal}
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

export default UsersReviews;
