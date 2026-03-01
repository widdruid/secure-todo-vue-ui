<script setup lang="ts">
import { ref } from "vue";
import type { Todo } from "../types/dto";

defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  (e: "delete", id: number): void;
  (e: "update", id: number, title: string): void;
}>();

const editingId = ref<number | null>(null);
const editedTitle = ref("");

const startEdit = (todo: Todo) => {
  editingId.value = todo.id;
  editedTitle.value = todo.title;
};

const cancelEdit = () => {
  editingId.value = null;
  editedTitle.value = "";
};

const saveEdit = (todo: Todo) => {
  const nextTitle = editedTitle.value.trim();

  if (!nextTitle || nextTitle === todo.title) {
    cancelEdit();
    return;
  }

  emit("update", todo.id, nextTitle);
  cancelEdit();
};
</script>

<template>
  <ul class="mt-4 space-y-2">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="flex items-center justify-between gap-2 border p-2"
    >
      <template v-if="editingId === todo.id">
        <input
          v-model="editedTitle"
          class="flex-1 border p-2"
          @keyup.enter="saveEdit(todo)"
        />

        <div class="flex gap-2">
          <button
            @click="saveEdit(todo)"
            class="rounded bg-green-600 px-3 py-1 text-white"
          >
            Save
          </button>

          <button @click="cancelEdit" class="rounded border px-3 py-1">
            Cancel
          </button>
        </div>
      </template>

      <template v-else>
        <span class="flex-1 text-left">{{ todo.title }}</span>

        <div class="flex gap-2">
          <button
            @click="startEdit(todo)"
            class="rounded border border-blue-500 px-3 py-1 text-blue-600"
          >
            Edit
          </button>

          <button
            @click="emit('delete', todo.id)"
            class="rounded border border-red-500 px-3 py-1 text-red-600"
          >
            Delete
          </button>
        </div>
      </template>
    </li>
  </ul>
</template>
