import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import ServeMealDataRow from "../../../components/TableRows/ServeMealDataRow";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    data,
    isLoading: mealsLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("/request-meals", "meals", search);

  const meals = data?.items;
  console.log(meals);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ currentStatus, id }) => {
      const { data } = await axiosSecure.patch(
        `/meal/delivered/${id}`,
        currentStatus
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role updated successfully!");
    },
  });

  const handleDelivered = async (id) => {
    const currentStatus = {
      status: "Delivered",
    };
    console.log("selim", id);
    mutateAsync({ currentStatus, id });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Serve Meals Overview"
        description="Manage requested meals in a table format, including meal titles, user emails, names, statuses, and an option to serve each meal."
      />
      <form
        className="px-5 flex items-center gap-4 lg:w-3/4 md:w-3/4 mx-auto"
        onSubmit={handleSearch}
      >
        <TextField
          label="Search By Email or Name"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          margin="normal"
        />

        <button
          type="submit"
          className="px-6 py-3 text-white sm:text-sm hover:bg-blue-600 rounded border bg-blue-500 border-blue-500"
        >
          Search
        </button>
      </form>
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
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Username
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      User email
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <ServeMealDataRow
                      key={meal._id}
                      meal={meal}
                      handleDelivered={handleDelivered}
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

export default ServeMeals;
