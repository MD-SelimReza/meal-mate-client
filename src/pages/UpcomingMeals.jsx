import UpcomingMealCard from "../components/UpcomingMeals/UpcomingMealCard";
import useMeal from "../hooks/useMeal";

const UpcomingMeals = () => {
  const { meals } = useMeal();
  return (
    <div className="my-10">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {meals.map((meal) => (
          <UpcomingMealCard
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

export default UpcomingMeals;
