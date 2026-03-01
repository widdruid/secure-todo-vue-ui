<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const email = ref("");
const password = ref("");
const error = ref("");

const router = useRouter();
const { login, loading } = useAuth();

const submit = async () => {
  error.value = "";

  try {
    await login(email.value, password.value);

    router.push("/");
  } catch {
    error.value = "Invalid credentials";
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96 border p-6 rounded">
      <h2 class="text-xl mb-4">Login</h2>

      <input
        v-model="email"
        placeholder="Email"
        class="border p-2 w-full mb-2"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-2"
      />

      <p v-if="error" class="text-red-500">
        {{ error }}
      </p>

      <button @click="submit" class="bg-blue-500 text-white w-full p-2">
        {{ loading ? "Loading..." : "Login" }}
      </button>

      <router-link to="/register" class="text-sm text-blue-500">
        Register
      </router-link>
    </div>
  </div>
</template>
