import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import UsersDataRow from "../../../components/TableRows/UsersDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading: usersLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Manage Users"
        description="View and manage all users in a table."
      />
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
                      User-email
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
                  {users.map((user) => (
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
    </div>
  );
};

export default ManageUsers;
