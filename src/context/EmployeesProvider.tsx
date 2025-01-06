import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import { Employee } from "@/types";

type InitialStateProps = {
  employees: Employee[];
};

const initialState: InitialStateProps = {
  employees: [
    {
      id: "e1",
      email: "employee1@example.com",
      startDate: "2022-01-15",
      active: true,
      phone: "123-456-7890",
      role: "Software Engineer",
      name: "Alice Johnson",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e2",
      email: "employee2@example.com",
      startDate: "2021-11-10",
      active: false,
      phone: "234-567-8901",
      role: "Product Manager",
      name: "Bob Smith",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e3",
      email: "employee3@example.com",
      startDate: "2023-06-23",
      active: true,
      phone: "345-678-9012",
      role: "HR Specialist",
      name: "Charlie Davis",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e4",
      email: "employee4@example.com",
      startDate: "2020-09-01",
      active: true,
      phone: "456-789-0123",
      role: "UX Designer",
      name: "Diana Miller",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e5",
      email: "employee5@example.com",
      startDate: "2022-04-12",
      active: false,
      phone: "567-890-1234",
      role: "Data Analyst",
      name: "Ethan Lee",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e6",
      email: "employee6@example.com",
      startDate: "2021-03-17",
      active: true,
      phone: "678-901-2345",
      role: "Marketing Specialist",
      name: "Fiona Clark",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e7",
      email: "employee7@example.com",
      startDate: "2024-02-05",
      active: true,
      phone: "789-012-3456",
      role: "DevOps Engineer",
      name: "George Moore",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e8",
      email: "employee8@example.com",
      startDate: "2019-08-22",
      active: false,
      phone: "890-123-4567",
      role: "Finance Analyst",
      name: "Hannah Evans",
      imageUrl: "/image/amn.png",
    },
    {
      id: "e9",
      email: "employee9@example.com",
      startDate: "2022-12-30",
      active: true,
      phone: "901-234-5678",
      role: "Content Writer",
      name: "Isaac Harris",
      imageUrl: "/image/amn.png",
    },
  ],
};

type EmployeesContextProps = {
  state: InitialStateProps;
  dispatch: React.Dispatch<EmployeesAction>;
  handleAddEmployee: (data: Employee) => void;
  handleEditeEmployee: (data: Employee) => void;
  handleDeleteEmployee: (id: string) => void;
};

type EmployeesAction =
  | { type: "ADD_EMPLOYEE"; payload: { employee: Employee } }
  | { type: "EDIT_EMPLOYEE"; payload: { employee: Employee } }
  | { type: "DELETE_EMPLOYEE"; payload: { id: string } };

const EmployeesContext = createContext<EmployeesContextProps | undefined>(
  undefined
);

function EmployeesReducer(state: InitialStateProps, action: EmployeesAction) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, { ...action.payload.employee }],
      };

    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee?.id === action.payload.employee.id) {
            return { ...employee, ...action.payload.employee };
          }
          return employee;
        }),
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (session) => session.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export const EmployeesProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(EmployeesReducer, initialState);

  function handleAddEmployee(data: Employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: { employee: { ...data } },
    });
  }

  function handleEditeEmployee(data: Employee) {
    dispatch({ payload: { employee: { ...data } }, type: "EDIT_EMPLOYEE" });
  }

  function handleDeleteEmployee(id: string) {
    dispatch({ payload: { id }, type: "DELETE_EMPLOYEE" });
  }

  return (
    <EmployeesContext.Provider
      value={{
        state,
        dispatch,
        handleDeleteEmployee,
        handleEditeEmployee,
        handleAddEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployeesContext = (): EmployeesContextProps => {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error(
      "useEmployeesContext must be used within a EmployeesProvider"
    );
  }
  return context;
};
