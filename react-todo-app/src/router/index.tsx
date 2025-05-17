import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import TodosPage from "@/pages/TodosPage";
import MainLayout from "@/layouts/MainLayout";
import LoginLayout from "@/layouts/LoginLayout";

import ProtectedRoute from "@/components/ProtectedRoute";
import PublicRoute from "@/components/PublicRoute";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <LoginLayout />,
        children: [
          {
            path: "/",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/todos",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <TodosPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
