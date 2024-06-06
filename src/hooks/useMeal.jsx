import useAxiosCommon from "./useAxiosCommon";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMeal = () => {
  const axiosCommon = useAxiosCommon();

  const fetchMeals = async ({ pageParam = 1 }) => {
    const { data } = await axiosCommon.get(`/meals?page=${pageParam}&limit=10`);
    console.log(data);
    // return data;
    console.log({ ...data, prevPage: pageParam });
    return { ...data, prevPage: pageParam };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["meals"],
      queryFn: fetchMeals,
      getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
      // getNextPageParam: (lastPage) => {
      //   if (lastPage.prevPage + 10 > lastPage.mealsCount) {
      //     return false;
      //   }
      //   return lastPage.prevPage + 10;
      // },
    });

  const meals = data?.pages.flatMap((page) => page.meals) ?? [];

  return { meals, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading };
};

export default useMeal;

// import { useState, useEffect } from "react";
// import useAxiosCommon from "./useAxiosCommon";

// const useMeal = () => {
//   const axiosCommon = useAxiosCommon();
//   const [meals, setMeals] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
//   console.log(meals.length);

//   const fetchMeals = async (page) => {
//     try {
//       setIsFetchingNextPage(true);
//       const { data } = await axiosCommon.get(`/meals?page=${page}&limit=10`);
//       setMeals((prevMeals) => [...prevMeals, ...data.meals]);
//       setHasNextPage(data.nextPage !== null);
//       setIsFetchingNextPage(false);
//     } catch (error) {
//       console.error("Failed to fetch meals", error);
//       setIsFetchingNextPage(false);
//     }
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     fetchMeals(page).finally(() => setIsLoading(false));
//   }, [page]);

//   const fetchNextPage = () => {
//     console.log(isFetchingNextPage, hasNextPage);
//     if (!isFetchingNextPage && hasNextPage) {
//       setPage((prevPage) => prevPage + 1);
//       fetchMeals(page + 1);
//     }
//     return;
//   };

//   return {
//     meals,
//     fetchNextPage,
//     isFetchingNextPage,
//     hasNextPage,
//     isLoading,
//   };
// };

// export default useMeal;
