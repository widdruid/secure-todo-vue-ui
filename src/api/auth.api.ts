import api from "./axios";
import type {
  LoginRequest,
  RegisterRequest,
  TokenResponse,
} from "../types/dto";

export const loginApi = (data: LoginRequest) =>
  api.post<TokenResponse>("/auth/login", data);

export const registerApi = (data: RegisterRequest) =>
  api.post("/auth/register", data);

export const refreshApi = () => api.post<TokenResponse>("/auth/refresh");
