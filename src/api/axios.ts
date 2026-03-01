import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

/*
 Attach access token automatically
*/
api.interceptors.request.use((config) => {
  const auth = useAuthStore();

  if (auth.accessToken) {
    config.headers.Authorization = `Bearer ${auth.accessToken}`;
  }

  return config;
});

/*
 Auto refresh token
*/
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const auth = useAuthStore();

    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      await auth.refresh();

      error.config.headers.Authorization = `Bearer ${auth.accessToken}`;

      return api(error.config);
    }

    return Promise.reject(error);
  },
);

export default api;
