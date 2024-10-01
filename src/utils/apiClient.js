import ky from "ky";

export const API_URL = "https://car-care-backend-joombow.onrender.com/";
// export const API_URL = "https://car-care-backend-joombow.vercel.app/";
// export const API_URL = "http://127.0.0.1:3000/";

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
