import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/Error/Error";
import Error404 from "@/pages/404/Error404";
import Layout from "./components/layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <h1>srwer</h1>,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);
