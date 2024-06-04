import axios from "axios";
import { baseURL } from "../url/baseURL";

const axiosCommon = axios.create({
  baseURL: baseURL,
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
