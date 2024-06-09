import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PaymentModal from "../Modal/PaymentModal";

const PackageDetails = () => {
  const axiosCommon = useAxiosCommon();
  const { package_name } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { data: packageItem = {} } = useQuery({
    queryKey: ["packageItem", package_name],
    queryFn: async () => {
      const { data } = await axiosCommon(`/checkout/${package_name}`);
      return data;
    },
  });

  const { package_name: title, price, icon, advantages } = packageItem;

  return (
    <div>
      <div className="max-w-lg mx-auto bg-blue-500 rounded-lg shadow-md overflow-hidden m-16 py-8 transform transition-all duration-300">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="flex justify-center mt-4">
          <p className="text-3xl">{icon}</p>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl text-center mb-2">{title}</div>
          <p className="text-lg text-center mb-6 font-bold text-yellow-500">
            Price: ${price}
          </p>
          <ul className="list-disc pl-5 mt-2 text-white">
            {advantages?.map((advantage, index) => (
              <li key={index} className="my-1">
                {advantage}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 pt-4 pb-4 flex justify-center">
          <button
            onClick={openModal}
            className="bg-blue-600 uppercase hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Purchase
          </button>
        </div>
      </div>
      <PaymentModal
        price={price}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title={title}
      />
    </div>
  );
};

export default PackageDetails;
