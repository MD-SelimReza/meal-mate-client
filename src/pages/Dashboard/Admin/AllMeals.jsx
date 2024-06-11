import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import MealDataRow from "../../../components/TableRows/MealDataRow";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AllMeals = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data,
    isLoading: mealsLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("/meals", "meals");

  const meals = data?.items;

  const { mutateAsync: updateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/meal/update/${id}`);
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
      const { data } = await axiosSecure.delete(`/meal/delete/${id}`);
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
        title="All Meals Overview"
        description="Browse all meals in a table format, including details such as title, likes, reviews, distributor name, and options to update, delete, or view each meal."
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
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-left">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-left">
                      Distributor
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <MealDataRow
                      key={meal._id}
                      meal={meal}
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

export default AllMeals;
