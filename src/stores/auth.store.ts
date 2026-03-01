import { defineStore } from "pinia";
import { loginApi, refreshApi } from "../api/auth.api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: "" as string | null,
    loading: false,
    initialized: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    /*
      LOGIN
      */
    async login(email: string, password: string) {
      this.loading = true;

      try {
        const res = await loginApi({
          email,
          password,
        });

        this.accessToken = res.data.access_token;
      } finally {
        this.loading = false;
      }
    },

    /*
      REFRESH TOKEN
      */
    async refresh() {
      try {
        const res = await refreshApi();

        this.accessToken = res.data.access_token;
      } catch {
        this.logout();
      }
    },

    /*
      APP INITIALIZATION
      Silent login
      */
    async initialize() {
      if (this.initialized) return;

      try {
        await this.refresh();
      } finally {
        this.initialized = true;
      }
    },

    /*
      LOGOUT
      */
    logout() {
      this.accessToken = null;
    },
  },
});
