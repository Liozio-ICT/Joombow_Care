export const API_URL = "https://car-care-backend-joombow.onrender.com";
// export const API_URL = "car-care-backend-joombow.vercel.app";
// export const API_URL = "http://127.0.0.1:3000";

const getToken = () => localStorage.getItem("auth_token");

// Create a function to handle API requests using fetch
const apiClient = {
  request: async (method, endpoint, data = null, options = {}) => {
    const url = `${API_URL}${endpoint}`;
    const token = getToken();
    const content_type =
      options["Content-Type"] ?? options.content_type ?? "application/json";
    const opts = {
      ...options,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": content_type,
        Accept: "application/json",
      },
    };

    if (
      data &&
      content_type === "application/json" &&
      (method === "POST" || method === "PUT" || method === "PATCH")
    ) {
      opts.body = JSON.stringify(data);
    }

    return await fetch(url, opts);

    // try {
    //   const response = await fetch(url, {
    //     ...opts,
    //     credentials: "include",
    //   });
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   return await response.json();
    // } catch (error) {
    //   console.error("API request failed:", error);
    //   throw error;
    // }
  },

  get: (endpoint, options = {}) =>
    apiClient.request("GET", endpoint, null, options),
  post: (endpoint, data, options = {}) =>
    apiClient.request("POST", endpoint, data, options),
  put: (endpoint, data, options = {}) =>
    apiClient.request("PUT", endpoint, data, options),
  patch: (endpoint, data, options = {}) =>
    apiClient.request("PATCH", endpoint, data, options),
  delete: (endpoint, options = {}) =>
    apiClient.request("DELETE", endpoint, null, options),
};
export default apiClient;
