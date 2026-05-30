import apiClient, { coursesApiClient } from "./api-client";
import type { AxiosResponse, AxiosError } from "axios";

const handleResponseSuccess = (response: AxiosResponse) => {
  return response.data;
};

const handleResponseError = (error: AxiosError) => {
  const status = error.response?.status;
  const message = (error.response?.data as any)?.message || "An unexpected error occurred";

  switch (status) {
    case 401:
      if (window.location.pathname.startsWith("/dashboard")) {
        window.location.href = "/login";
      }
      break;
    case 403:
      console.error("[API Error] Forbidden: You don't have permission.");
      break;
    case 404:
      console.error("[API Error] Not Found: Resource does not exist.");
      break;
    case 500:
      console.error("[API Error] Central Server Error:", message);
      break;
    default:
      console.error(`[API Error] ${status || "Network Error"}: ${message}`);
  }

  return Promise.reject(error);
};

apiClient.interceptors.response.use(handleResponseSuccess, handleResponseError);
coursesApiClient.interceptors.response.use(handleResponseSuccess, handleResponseError);

export { coursesApiClient };
export default apiClient;
