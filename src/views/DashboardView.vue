<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
import { useTodos } from "../composables/useTodos";

const router = useRouter();
const { logout } = useAuth();

const { todos, fetchTodos, createTodo, updateTodo, deleteTodo } = useTodos();

onMounted(fetchTodos);

const handleLogout = () => {
  logout();
  router.push("/login");
};
</script>

<template>
  <main class="mx-auto max-w-2xl p-6">
    <header class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-semibold">My Todos</h1>

      <button
        @click="handleLogout"
        class="rounded border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
      >
        Logout
      </button>
    </header>

    <TodoForm @create="createTodo" />

    <p v-if="!todos.length" class="mt-4 text-sm text-gray-500">
      No todos yet. Add your first task above.
    </p>

    <TodoList v-else :todos="todos" @update="updateTodo" @delete="deleteTodo" />
  </main>
</template>
