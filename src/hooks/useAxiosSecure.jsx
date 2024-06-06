import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../url/baseURL";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log(error.response.status);
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signIn");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
