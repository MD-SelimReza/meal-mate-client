import PropTypes from "prop-types";

const DemoModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is a centered modal example.</p>
        <button
          onClick={onRequestClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

DemoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default DemoModal;
