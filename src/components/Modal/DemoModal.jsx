import PropTypes from "prop-types";

const DemoModal = ({ isOpen, onRequestClose, meal, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-gray-600 text-2xl">{meal.title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-sm text-gray-600">
            ({meal?.reviews?.length || 0} Reviews)
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <div className="">
              <span className="text-2xl text-gray-700 font-semibold">
                Price: ${meal?.price}
              </span>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Admin:</span> {meal?.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Category:</span>
                {meal?.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Post Time:</span>
                {meal?.postTime}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Availability:</span>
                <span className="text-green-600">In Stock</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Stock Count:</span> 150
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Like:</span> {meal?.likes}
              </p>
            </div>
            <button
              onClick={onRequestClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
          <div>
            <img
              src={meal?.image ? meal?.image : image}
              alt=""
              className="max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DemoModal.propTypes = {
  meal: PropTypes.object,
  image: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default DemoModal;
