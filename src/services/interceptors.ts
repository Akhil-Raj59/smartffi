import apiClient from "./api-client";
import type { AxiosResponse, AxiosError } from "axios";

/**
 * Response Interceptor: Centralized Error Handling and Data Unwrapping
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Unwraps response data so that the API call resolves to response.data directly
    return response.data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const message = (error.response?.data as any)?.message || "An unexpected error occurred";

    // Handle specific status codes
    switch (status) {
      case 401:
        // Unauthorized: Redirect to login if user is trying to access protected paths like dashboard
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
        console.error("[API Error] Internal Server Error:", message);
        break;
      default:
        console.error(`[API Error] ${status || "Network Error"}: ${message}`);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
