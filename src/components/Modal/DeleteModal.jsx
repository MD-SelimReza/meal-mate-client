import PropTypes from "prop-types";

const DeleteModal = ({ onRequestClose, isOpen, handleDelete, id }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-25">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Are you sure?
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {"You cannot undo once it's done!"}
          </p>
        </div>
        <hr className="mt-8" />
        <div className="flex mt-2 justify-around">
          <button
            onClick={() => {
              handleDelete(id);
              onRequestClose();
            }}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Yes
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={onRequestClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  handleDelete: PropTypes.func,
  id: PropTypes.string,
};

export default DeleteModal;
