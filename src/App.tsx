import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { TodoListForm } from "./pages/TodoListPage";
import { HomePage } from "./pages/HomePage";
import { TodoItem } from "./models/TodoItem";
import { NotFountPage } from "./pages/404/404";
import { TodoDescription } from "./pages/TodoDescription";
import { Layout } from "./layouts/Layout";

function App() {
  const todoList: TodoItem[] = [
    { id: 0, text: "Первая задача", isDone: false },
    { id: 1, text: "Вторая задача", isDone: true },
    { id: 2, text: "Третья задача", isDone: true },
    { id: 3, text: "Четвертая задача", isDone: false },
  ];

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <NotFountPage />,
        children: [
          {
            path: "/",
            element: <HomePage todos={todoList} />,
          },
          {
            path: "/todo",
            element: <TodoListForm />,
          },
          {
            path: "/list/:id",
            element: <TodoDescription todos={todoList} />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFountPage />,
      },
    ],
    { basename: "/app/" }
  );

  return <RouterProvider router={router} />;
}

export default App;
