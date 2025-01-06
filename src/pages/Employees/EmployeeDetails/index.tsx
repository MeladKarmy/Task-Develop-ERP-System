import { useEmployeesContext } from "@/context/EmployeesProvider";
import { useParams } from "react-router-dom";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    state: { employees },
  } = useEmployeesContext();
  const employee = employees.find((employee) => employee.id === id) || null;
  return (
    <section className="container mx-auto ">
      <EmployeeCard employee={employee} />
    </section>
  );
};

export default EmployeeDetails;
