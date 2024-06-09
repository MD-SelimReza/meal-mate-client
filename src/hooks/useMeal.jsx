import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMeal = () => {
  const axiosCommon = useAxiosCommon();

  const { data, isLoading: mealsLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/meals");
      console.log(data);
      return data;
    },
  });

  const meals = data?.items;

  return { meals, mealsLoading };
};

export default useMeal;

// const fetchMeals = async ({ pageParam = 1 }) => {
//   const { data } = await axiosCommon.get(
//     `/all-meals?page=${pageParam}&limit=10`
//   );
//   console.log(data);
//   // return data;
//   console.log({ ...data, prevPage: pageParam });
//   return { ...data, prevPage: pageParam };
// };

// const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
//   useInfiniteQuery({
//     queryKey: ["meals"],
//     queryFn: fetchMeals,
//     // getNextPageParam: (lastPage) => {
//     //   console.log("lastPage-->", lastPage.totalMeals);
//     //   lastPage.nextPage ?? false;
//     // },
//     getNextPageParam: (lastPage) => {
//       if (lastPage.prevPage + 10 > lastPage.mealsCount) {
//         return false;
//       }
//       return lastPage.prevPage + 10;
//     },
//   });

// const meals = data?.pages.flatMap((page) => page.meals) ?? [];
// console.log(meals);

// return { meals, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading };
