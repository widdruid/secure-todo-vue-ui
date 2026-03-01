<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["create"]);

const title = ref("");

const submit = () => {
  if (!title.value.trim()) return;

  emit("create", title.value);

  title.value = "";
};
</script>

<template>
  <div class="flex gap-2">
    <input v-model="title" placeholder="New Todo" class="border p-2 flex-1" />

    <button @click="submit" class="bg-blue-500 text-white px-4">Add</button>
  </div>
</template>
