import MealBox from "../components/Meals/MealBox";
import useMeal from "../hooks/useMeal";

const Meals = () => {
  const { meals } = useMeal();
  return (
    <div className="my-10">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {meals.map((meal) => (
          <MealBox
            key={meal._id}
            image={
              "https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg"
            }
            id={meal._id}
            rating={meal.rating}
            price={meal.price}
            description={meal.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
