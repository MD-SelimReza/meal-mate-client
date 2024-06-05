import useAxiosCommon from "./useAxiosCommon";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMeal = () => {
  const axiosCommon = useAxiosCommon();

  const fetchMeals = async ({ pageParam = 1 }) => {
    const { data } = await axiosCommon.get(`/meals?page=${pageParam}&limit=10`);
    return data;
    //  return { ...data, prevPage: pageParam }
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["meals"],
      queryFn: fetchMeals,
      getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
      // getNextPageParam: (lastPage) => {
      //   if (lastPage.prevPage + 10 > lastPage.articlesCount) {
      //     return false;
      //   }
      //   return lastPage.prevPage + 10;
      // },
    });

  console.log(data);
  const meals = data?.pages.flatMap((page) => page.meals) ?? [];
  console.log(meals);

  return { meals, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading };
};

export default useMeal;
