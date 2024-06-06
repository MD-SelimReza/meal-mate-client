import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user?.email);
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/admin/${user?.email}`);
      return data;
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
