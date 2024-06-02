import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
          <svg
            className="w-6 h-6 text-blue-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7h3v7h2V9h2v5h2V9h2v5h2V9h2v7h2V7h3z" />
          </svg>
        </div>
        <span className="ml-3 text-2xl font-bold text-white">
          Hostel<span className="text-yellow-500">Ease</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
