import RequestedMealDataRow from "../../../components/TableRows/RequestedMealDataRow";
import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const RequestedMeals = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: meals = [],
    isLoading: mealsLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("requestMeals", "requestMeals");

  const { mutateAsync } = useMutation({
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
        title="Requested Meals Overview"
        description="View requested meals in a table with details such as meal title, likes, reviews, status, and cancel button."
      />
      {mealsLoading ? (
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
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Cancel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals?.map((meal) => (
                    <RequestedMealDataRow
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

export default RequestedMeals;
