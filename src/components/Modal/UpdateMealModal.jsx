import PropTypes from "prop-types";

const UpdateMealModal = ({ onRequestClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-25">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
          Update Meal Info
        </h3>
        <form
          //   onSubmit={(e) => {
          //     e.preventDefault();
          //     // Handle form submission
          //     setIsEditModalOpen(false);
          //   }}
          className="mt-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Admin name</label>
              <input
                type="text"
                defaultValue="Admin Name" // Replace with your admin name state/prop
                readOnly
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Admin email</label>
              <input
                type="email"
                defaultValue="admin@example.com" // Replace with your admin email state/prop
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500">
                <option value="">Select Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Price</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Post Time</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Description</label>
            <textarea className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mr-2"
              onClick={onRequestClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateMealModal.propTypes = {
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  handleUpdate: PropTypes.func,
  id: PropTypes.string,
};

export default UpdateMealModal;
