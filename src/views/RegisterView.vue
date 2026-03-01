<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { registerApi } from "../api/auth.api";

const email = ref("");
const password = ref("");
const router = useRouter();

const submit = async () => {
  await registerApi({
    email: email.value,
    password: password.value,
  });

  router.push("/login");
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96 border p-6 rounded">
      <h2 class="text-xl mb-4">Register</h2>

      <input
        v-model="email"
        placeholder="Email"
        class="border p-2 w-full mb-2"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-4"
      />

      <button @click="submit" class="bg-green-500 text-white w-full p-2">
        Register
      </button>
    </div>
  </div>
</template>
