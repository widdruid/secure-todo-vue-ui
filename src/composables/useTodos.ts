import { ref } from "vue";

import {
  getTodosApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../api/todo.api";

import type { Todo } from "../types/dto";

export function useTodos() {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);

  /*
  FETCH TODOS
  */
  const fetchTodos = async () => {
    loading.value = true;

    try {
      const res = await getTodosApi();

      todos.value = res.data;
    } finally {
      loading.value = false;
    }
  };

  /*
  CREATE
  Optimistic update
  */
  const createTodo = async (title: string) => {
    const res = await createTodoApi(title);

    todos.value.push(res.data);
  };

  /*
  UPDATE
  */
  const updateTodo = async (id: number, title: string) => {
    const res = await updateTodoApi(id, title);

    const index = todos.value.findIndex((t) => t.id === id);

    if (index !== -1) todos.value[index] = res.data;
  };

  /*
  DELETE
  */
  const deleteTodo = async (id: number) => {
    await deleteTodoApi(id);

    todos.value = todos.value.filter((t) => t.id !== id);
  };

  return {
    todos,
    loading,
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
}
