import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Payment from "../StipePayment/Payment";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const PackageDetails = () => {
  const axiosCommon = useAxiosCommon();
  const { package_name } = useParams();
  const { data: packageItem = {} } = useQuery({
    queryKey: ["packageItem", package_name],
    queryFn: async () => {
      const { data } = await axiosCommon(`/checkout/${package_name}`);
      return data;
    },
  });

  const { package_name: title, price, icon, advantages } = packageItem;
  console.log(packageItem);

  return (
    <div className="max-w-lg mx-auto bg-blue-500 rounded-lg shadow-md overflow-hidden m-6 transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-center mt-4">
        <p className="text-3xl">{icon}</p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl text-center mb-2">{title}</div>
        <p className="text-white text-lg text-center mb-4">${price}</p>
        <ul className="list-disc pl-5 mt-2 text-white">
          {advantages?.map((advantage, index) => (
            <li key={index} className="my-1">
              {advantage}
            </li>
          ))}
        </ul>
      </div>
      <Payment price={price} />
      {/* <div className="px-6 pt-4 pb-4 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Purchase
        </button>
      </div> */}
    </div>
  );
};

export default PackageDetails;
