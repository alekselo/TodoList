import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { ViewListPage } from "./pages/ViewListPage";
import { TodoListPage } from "./pages/TodoListPage";
import { ViewListItemPage } from "./pages/ViewListItemPage";
import { NotFountPage } from "./pages/404/404";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFountPage />,
      children: [
        {
          path: "/",
          element: <TodoListPage />,
        },
        {
          path: "/list",
          element: <ViewListPage />,
        },
        {
          path: "/list/:id",
          element: <ViewListItemPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFountPage />,
    },
  ],
  { basename: "/app" }
);
