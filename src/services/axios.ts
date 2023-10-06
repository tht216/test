import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
import { store, type RootState } from "@src/stores/store";
import { selectToken } from "@src/stores/authSlice";

// Create a custom Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = selectToken(store.getState() as RootState);
      console.log("Token: ", token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request errors here (e.g., network issues)
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    // Handle successful responses here
    return response.data;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("Unauthorized");
        break;

      case 404:
        console.error("notFound");
        break;

      case 500:
        console.error("serverError");
        break;
    }
    return Promise.reject(error);
  }
);

export const axiosCustom = {
  get: <T>(url: string) => axiosInstance.get<T>(url),
};

export default axiosInstance;
