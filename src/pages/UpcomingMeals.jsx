import { Helmet } from "react-helmet-async";
import UpcomingMealCard from "../components/UpcomingMeals/UpcomingMealCard";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/shared/Loader";
// import { format, compareAsc } from "date-fns";

const UpcomingMeals = () => {
  const axiosCommon = useAxiosCommon();
  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/upcoming-meals");
      console.log(data);
      return data;
    },
  });

  // const currentDate = new Date();

  // const upcomingMeals = meals
  //   ?.filter((meal) => new Date(meal.postTime) > currentDate)
  //   ?.sort((a, b) => new Date(a.date) - new Date(b.date))
  //   ?.slice(0, 10);

  // console.log(
  //   currentDate.toLocaleDateString(),
  //   upcomingMeals
  //   // format(new Date(upcomingMeals[0]?.postTime), "MM/dd/yyyy")
  // );

  if (isLoading) return <Loader />;
  return (
    <div className="my-10">
      <Helmet>
        <title>Upcoming Meals</title>
      </Helmet>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {meals &&
          meals?.map((meal) => (
            <UpcomingMealCard
              key={meal._id}
              image={
                "https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg"
              }
              id={meal._id}
              rating={meal?.reviews[0]?.rating}
              price={meal.price}
              description={meal.description}
            />
          ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
