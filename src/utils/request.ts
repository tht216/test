import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

// Create a custom Axios instance
const request: AxiosInstance = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define an interface for your API response data
interface ApiResponse<T> {
  data: T;
  success: true;
}

// Define an interface for your API error response
interface ApiError {
  message: string;
  status: number;
}

// Request interceptor
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can modify the request configuration here, e.g., add headers, authentication, etc.
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
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

// Response interceptor
request.interceptors.response.use(
  <T>(response: AxiosResponse<ApiResponse<T> | T>) => {
    // Handle successful responses here
    return response.data;
  },
  (error: AxiosError<ApiError>) => {
    // Handle error responses here
    if (error.response) {
      const { message, status } = error.response.data;
      console.error(`API Error [${status}]: ${message}`);
    } else {
      console.error("Network Error: Unable to reach the server.");
    }
    return Promise.reject(error);
  }
);

export default request;
