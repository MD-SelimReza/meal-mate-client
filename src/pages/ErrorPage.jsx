import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-black bg-opacity-50 flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-xl text-gray-800">Oops! Page not found.</p>
            <p className="mt-2 text-gray-600">
              {"The page you're looking for doesn't exist or has been moved."}
            </p>
            <button
              onClick={handleGoHome}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
