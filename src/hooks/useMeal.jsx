import useAxiosCommon from "./useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const useMeal = () => {
  const axiosCommon = useAxiosCommon();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const { data } = await axiosCommon("/meals");
      return data;
    },
  });
  return { meals, refetch };
};

export default useMeal;
