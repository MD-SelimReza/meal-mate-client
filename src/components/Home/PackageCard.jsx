import { Link } from "react-router-dom";

const PackageCard = ({ title, price, icon, features }) => {
  return (
    <Link
      to={`/checkout/${title}`}
      className="p-8 bg-blue-600 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-2xl font-semibold mt-4">{title}</h3>
      <p className="mt-2">{features}</p>
      <p className="mt-4 text-lg font-bold text-yellow-600">Price: ${price}</p>
    </Link>
  );
};

export default PackageCard;
