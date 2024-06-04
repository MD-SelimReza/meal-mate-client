import { Link } from "react-router-dom";

const Packages = () => {
  return (
    // <section className="">
    //   <div className="container px-6 py-10 mx-auto">
    //     <h1 className="text-3xl font-semibold text-center text-gray-800">
    //       Upgrade to Premium Membership
    //     </h1>

    //     <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-3">
    //       <Link
    //         to="/upgrade/silver"
    //         className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-lg shadow-lg dark:bg-[#E5E7EB]"
    //       >
    //         <span className="inline-block p-3 text-yellow-500 bg-yellow-100 rounded-full dark:text-white dark:bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-12 h-12"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    //             <path d="M17.5 21l-5.5-4-5.5 4V5h11v16z"></path>
    //           </svg>
    //         </span>

    //         <h1 className="text-xl font-semibold text-gray-800">
    //           Silver Membership
    //         </h1>

    //         <p className="text-gray-600">Price: $X per month/year</p>
    //       </Link>

    //       <Link
    //         to="/upgrade/silver"
    //         className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-lg shadow-lg dark:bg-[#E5E7EB]"
    //       >
    //         <span className="inline-block p-3 rounded-full text-white bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-12 h-12"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    //             <path d="M17.5 21l-5.5-4-5.5 4V5h11v16z"></path>
    //           </svg>
    //         </span>

    //         <h1 className="text-xl font-semibold text-gray-800">
    //           Silver Membership
    //         </h1>

    //         <p className="text-gray-600">Price: $X per month/year</p>
    //       </Link>

    //       <Link
    //         to="/upgrade/silver"
    //         className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-lg shadow-lg dark:bg-[#E5E7EB]"
    //       >
    //         <span className="inline-block p-3 text-white bg-blue-500 rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-12 h-12"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    //             <path d="M17.5 21l-5.5-4-5.5 4V5h11v16z"></path>
    //           </svg>
    //         </span>

    //         <h1 className="text-xl font-semibold text-gray-800">
    //           Silver Membership
    //         </h1>

    //         <p className="text-gray-600">Price: $X per month/year</p>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <div className="flex justify-center items-center min-h-screen bg-[#013D29] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-[#0C4532] rounded-lg shadow-md text-center">
          <div className="text-4xl">🥈</div>
          <h3 className="text-2xl font-semibold mt-4">Silver Package</h3>
          <p className="mt-2">Basic features and support.</p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Get Silver
          </a>
        </div>
        <div className="p-8 bg-[#0C4532] rounded-lg shadow-md text-center">
          <div className="text-4xl">🥇</div>
          <h3 className="text-2xl font-semibold mt-4">Gold Package</h3>
          <p className="mt-2">Advanced features and priority support.</p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Get Gold
          </a>
        </div>
        <div className="p-8 bg-[#0C4532] rounded-lg shadow-md text-center">
          <div className="text-4xl">🏆</div>
          <h3 className="text-2xl font-semibold mt-4">Platinum Package</h3>
          <p className="mt-2">All features and premium support.</p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Get Platinum
          </a>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center min-h-screen bg-blue-800 text-white">
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //     <div className="p-8 bg-blue-800 rounded-lg shadow-md text-center">
    //       <div className="text-4xl">🔹</div>
    //       <h3 className="text-2xl font-semibold mt-4">Silver Package</h3>
    //       <p className="mt-2">Basic features and support.</p>
    //       <a
    //         href="#"
    //         className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
    //       >
    //         Get Silver
    //       </a>
    //     </div>
    //     <div className="p-8 bg-yellow-600 rounded-lg shadow-md text-center">
    //       <div className="text-4xl">🌟</div>
    //       <h3 className="text-2xl font-semibold mt-4">Gold Package</h3>
    //       <p className="mt-2">Advanced features and priority support.</p>
    //       <a
    //         href="#"
    //         className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded"
    //       >
    //         Get Gold
    //       </a>
    //     </div>
    //     <div className="p-8 bg-indigo-700 rounded-lg shadow-md text-center">
    //       <div className="text-4xl">💎</div>
    //       <h3 className="text-2xl font-semibold mt-4">Platinum Package</h3>
    //       <p className="mt-2">All features and premium support.</p>
    //       <a
    //         href="#"
    //         className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
    //       >
    //         Get Platinum
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Packages;
