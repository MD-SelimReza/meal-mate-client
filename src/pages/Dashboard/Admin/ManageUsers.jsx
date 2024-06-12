import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress, TextField } from "@mui/material";
import UsersDataRow from "../../../components/TableRows/UsersDataRow";
import usePaginatedQuery from "../../../hooks/usePaginatedQuery";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { useState } from "react";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    data,
    isLoading: usersLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  } = usePaginatedQuery("/users", "users", search);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const users = data?.items;

  console.log(users);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Manage Users"
        description="View and manage all users in a table."
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
      {usersLoading ? (
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
                      Username
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      User Email
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <UsersDataRow
                      key={user._id}
                      user={user}
                      refetch={refetch}
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

export default ManageUsers;
