const Banner = () => {
  return (
    <div
      className="relative mb-10 max-w-screen-2xl mx-auto bg-cover bg-center bg-no-repeat xl:py-24 md:py-20 py-12 px-4 md:px-10 lg:px-20 text-center"
      style={{
        backgroundImage: `url('https://www.troy.edu/_assets/20-25-strategic-plan/_images/strategic-plan-600-1920-2.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to HostelEase
        </h1>
        <p className="text-lg text-white mb-8">
          Streamline your hostel management with ease. Manage meals, reviews,
          and student data efficiently.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-lg w-2/3 md:w-1/2 lg:w-1/3 text-black focus:outline-none"
          />
          <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
