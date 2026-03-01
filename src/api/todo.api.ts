import api from "./axios";
import type { Todo } from "../types/dto";

export const getTodosApi = () => api.get<Todo[]>("/todos");

export const getTodoApi = (id: number) => api.get<Todo>(`/todos/${id}`);

export const createTodoApi = (title: string) =>
  api.post<Todo>("/todos", { title });

export const updateTodoApi = (id: number, title: string) =>
  api.put<Todo>(`/todos/${id}`, { title });

export const deleteTodoApi = (id: number) => api.delete(`/todos/${id}`);
