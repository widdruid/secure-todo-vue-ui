import { useAuthStore } from "../stores/auth.store";

export function useAuth() {
  const auth = useAuthStore();

  return {
    login: auth.login,
    logout: auth.logout,
    isAuthenticated: auth.isAuthenticated,
    loading: auth.loading,
  };
}
