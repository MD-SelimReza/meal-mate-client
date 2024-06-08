import PropTypes from "prop-types";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="mt-8 text-center mx-auto relative">
      <h2 className="text-3xl mb-2 font-semibold">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full px-5 h-[3px] bg-gradient-to-r from-blue-600 to-purple-600"></div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SectionTitle;
