// import useAxiosCommon from "./useAxiosCommon";
// import { useQuery } from "@tanstack/react-query";

// const useMeal = () => {
//   const axiosCommon = useAxiosCommon();
//   const { data: meals = [], refetch } = useQuery({
//     queryKey: ["meals"],
//     queryFn: async () => {
//       const { data } = await axiosCommon("/meals");
//       return data;
//     },
//   });
//   return { meals, refetch };
// };

// export default useMeal;

import useAxiosCommon from "./useAxiosCommon";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMeal = () => {
  const axiosCommon = useAxiosCommon();

  const fetchMeals = async ({ pageParam = 1 }) => {
    const { data } = await axiosCommon.get(`/meals?page=${pageParam}&limit=10`);
    return data;
    //  return { ...data, prevOffset: pageParam }
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

  const meals = data?.pages.flatMap((page) => page.meals) ?? [];

  return { meals, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading };
};

export default useMeal;
