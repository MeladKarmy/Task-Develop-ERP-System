import { Employee } from "@/types";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees }: { employees: Employee[] }) => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-2">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
