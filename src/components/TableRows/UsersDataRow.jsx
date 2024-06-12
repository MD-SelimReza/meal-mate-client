import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import UpdateUserModal from "../Modal/UpdateUserModal";

const UsersDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (badge) => {
      const { data } = await axiosSecure.patch(
        `/user-badge/update/${user?.email}`,
        badge
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role updated successfully!");
      setModalIsOpen(false);
    },
  });

  //   modal handler
  const handleBadge = async (selected) => {
    if (loggedInUser.email === user.email) {
      toast.error("Action Not Allowed");
      return setModalIsOpen(false);
    }

    const userRole = {
      badge: selected,
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <tr key={user.title} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {user?.email === "support@admin.com" ? "Admin" : user?.badge}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div
          onClick={openModal}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update Role</span>
        </div>
        {/* Update User Modal */}
        <UpdateUserModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          handleBadge={handleBadge}
          user={user}
        />
      </td>
    </tr>
  );
};

UsersDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UsersDataRow;
