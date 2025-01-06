import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { EmployeesProvider } from "./context/EmployeesProvider";

function App() {
  return (
    <EmployeesProvider>
      <RouterProvider router={router} />
    </EmployeesProvider>
  );
}

export default App;
