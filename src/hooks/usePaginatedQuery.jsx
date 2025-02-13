import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const usePaginatedQuery = (endpoint, queryKey, search, itemsPerPage = 10) => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `${endpoint}?page=${currentPage}&size=${itemsPerPage}&search=${search}`,
        {
          params: {
            page: currentPage,
            size: itemsPerPage,
          },
        }
      );
      return data;
    },
    queryKey: [queryKey, currentPage, search],
  });

  console.log(data);

  const totalPages = data?.totalPages || 0;

  return {
    data: data,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPages,
    refetch,
  };
};

export default usePaginatedQuery;
