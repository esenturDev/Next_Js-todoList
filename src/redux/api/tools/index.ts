import { api as index } from "../index";

const todoApi = index.injectEndpoints({
	endpoints: (boild) => ({
    getTodos: boild.query<TodoList.GetTodosResponse, TodoList.GetTodosRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['todolist'],
    }),
    postTodos: boild.mutation<TodoList.PostTodosResponse, TodoList.PostTodosRequest>({
      query: (newTodos) => ({
        url: "",
        method: "POST",
        body: newTodos,
      }),
      invalidatesTags: ['todolist'],
    }),
    deleteTodos: boild.mutation({
      query: (_id) => ({
        url: _id,
        method: "DELETE",
      }),
      invalidatesTags: ['todolist'],
    })
  }),
});

export const {useGetTodosQuery, usePostTodosMutation, useDeleteTodosMutation} = todoApi;