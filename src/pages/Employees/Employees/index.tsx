// import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEmployeesContext } from "@/context/EmployeesProvider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearchParams } from "react-router-dom";
import EmployeeList from "./_components/EmployeeList";
import EmployeesTable from "./_components/EmployeesTable";
import { columns } from "./_components/employees-columns";

const Employees = () => {
  const {
    state: { employees },
  } = useEmployeesContext();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("searchValue") || "";
  // const pageIndex = searchParams.get("pageIndex") || 1;
  const employeesWithFilter = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {isMobile ? (
        <EmployeeList
          employees={!searchValue ? employees : employeesWithFilter}
        />
      ) : (
        <EmployeesTable
          columns={columns}
          data={!searchValue ? employees : employeesWithFilter}
          totalCount={employees.length}
        />
      )}
    </div>
  );
};

export default Employees;
