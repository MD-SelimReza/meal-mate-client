import PropTypes from "prop-types";

const MealDescription = ({ description }) => {
  return (
    <div className="text-gray-600">
      <p>{description}</p>
      {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum illum
        sit quaerat voluptas saepe accusamus quas mollitia impedit consequatur,
        eos doloribus deleniti magni inventore earum ex a cum adipisci numquam.
      </p> */}
    </div>
  );
};

MealDescription.propTypes = {
  description: PropTypes.string,
};

export default MealDescription;
