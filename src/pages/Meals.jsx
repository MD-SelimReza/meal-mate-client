import InfiniteScroll from "react-infinite-scroller";
import MealBox from "../components/Meals/MealBox";
import useMeal from "../hooks/useMeal";
import { Helmet } from "react-helmet-async";

const Meals = () => {
  const { meals, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useMeal();

  return (
    <div className="my-10">
      <Helmet>
        <title>Meals</title>
      </Helmet>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          isLoading ? (
            <div className="loader" key={0}>
              Loading ...
            </div>
          ) : (
            ""
          )
        }
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {meals &&
            meals.map((meal) => (
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
      </InfiniteScroll>
      {isFetchingNextPage && <div className="loader">Loading more...</div>}
    </div>
  );
};

export default Meals;
