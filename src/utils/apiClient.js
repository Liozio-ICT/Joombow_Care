import ky from "ky";

export const API_URL =
  import.meta.env.VITE_SERVER_URL ??
  "https://car-care-backend-joombow.onrender.com/";

// Create a function to handle API requests using fetch
const apiClient = ky.create({
  prefixUrl: API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem("auth_token")}`,
        );

        request.headers.set("Accept", "application/json");
      },
    ],
  },
});
export default apiClient;
