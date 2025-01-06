import { ColumnDef } from "@tanstack/react-table";

import { Employee } from "@/types";
import { Link } from "react-router-dom";
import DeleteEmployee from "./DeleteEmployee";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <h3 className="text-black">Employee</h3>;
    },
    cell: ({ row }) => {
      console.log(row.getValue("imageUrl"));
      return (
        <Link
          className="flex items-center gap-2 text-black hover:text-black font-normal"
          to={`/employees/${row.getValue("id")}`}
        >
          <img
            className="rounded-full h-7 w-7"
            src={"../../../../../public/image/man.png"}
            alt="name"
          />
          <h5>{row.getValue("name")}</h5>
        </Link>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => {
      return <h3 className="text-black">Role</h3>;
    },
  },
  {
    accessorKey: "email",
    header: () => {
      return <h3 className="text-black">E-mail</h3>;
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return <h3 className="text-black">Phone</h3>;
    },
  },
  {
    accessorKey: "startDate",
    header: () => {
      return <h3 className="text-black"> Start Date</h3>;
    },
    cell: ({ row }) => {
      return <>{new Date(row.getValue("startDate")).toLocaleDateString()}</>;
    },
  },
  {
    accessorKey: "active",
    header: () => {
      return <h3 className="text-black">Active</h3>;
    },
    cell: ({ row }) => {
      return (
        <>
          {row.getValue("active") ? (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.40918C5.38308 0.40918 0 5.79226 0 12.4092C0 19.0261 5.38308 24.4092 12 24.4092C18.6169 24.4092 24 19.0261 24 12.4092C24 5.79226 18.6169 0.40918 12 0.40918ZM19.8185 8.99349L9.56 17.7012C9.33631 17.8898 9.06031 17.9932 8.78 17.9947H8.76215L8.64523 17.9886C8.31015 17.9541 8.01138 17.7935 7.804 17.5356L4.01385 12.7698C3.80985 12.5135 3.71754 12.1926 3.75415 11.8661C3.79169 11.5378 3.95446 11.2446 4.21323 11.0393C4.41723 10.8756 4.68646 10.7836 4.96708 10.7836C5.35231 10.7836 5.71754 10.9553 5.944 11.2424L8.93415 15.0027L18.2249 7.11687C18.4357 6.93964 18.7129 6.84364 19.0089 6.84364C19.3902 6.84364 19.7366 6.9941 19.9594 7.25656C20.3988 7.77903 20.3342 8.55656 19.8185 8.99349Z"
                fill="#5C980F"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.38105 0 0 5.38105 0 12C0 18.6189 5.38105 24 12 24C18.6189 24 24 18.6189 24 12C24 5.38105 18.6189 0 12 0ZM17.1284 14.5516C17.8358 15.2589 17.8358 16.421 17.1284 17.1284C16.7747 17.4821 16.32 17.659 15.84 17.659C15.36 17.659 14.9053 17.4821 14.5516 17.1284L12 14.5768L9.44843 17.1284C9.09474 17.4821 8.64 17.659 8.16 17.659C7.68 17.659 7.22527 17.4821 6.87158 17.1284C6.16421 16.421 6.16421 15.2589 6.87158 14.5516L9.42315 12L6.87158 9.44843C6.16421 8.74106 6.16421 7.57895 6.87158 6.87158C7.57895 6.16421 8.74106 6.16421 9.44843 6.87158L12 9.42315L14.5516 6.87158C15.2589 6.16421 16.421 6.16421 17.1284 6.87158C17.8358 7.57895 17.8358 8.74106 17.1284 9.44843L14.5768 12L17.1284 14.5516Z"
                fill="#BF0000"
              />
            </svg>
          )}
        </>
      );
    },
  },

  {
    accessorKey: "id",
    header: () => {
      return <></>;
    },
    cell: ({ row }) => {
      return <DeleteEmployee employee={row.original} />;
    },
  },
];
