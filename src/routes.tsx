import Error404 from "@/pages/404/Error404";
import Error from "@/pages/Error/Error";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/Employees/EmployeeDetails";
import Employees from "./pages/Employees/Employees";
import Teams from "./pages/Teams";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Employees />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "/employees/:id",
        element: <EmployeeDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);
