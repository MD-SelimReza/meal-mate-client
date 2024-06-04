const MealIngredients = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];

  return (
    <div>
      {categories.map((item, idx) => (
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

export default MealIngredients;
