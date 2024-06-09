import PropTypes from "prop-types";

const MealIngredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((item, idx) => (
        <p
          key={idx}
          className="text-gray-600 border p-2 first:rounded-t-md last:rounded-b-md"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

MealIngredients.propTypes = {
  ingredients: PropTypes.array,
};

export default MealIngredients;
