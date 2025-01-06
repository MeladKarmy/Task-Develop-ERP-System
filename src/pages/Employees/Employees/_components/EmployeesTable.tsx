import CustomTable from "@/components/table/CustomTable";
import useDataTable from "@/hooks/useDataTable";
import { TableProps } from "@/types";
import SearchBar from "./SearchBar";
import Pagination from "@/components/shared/Pagination";
import ButtonAddEmployee from "./ButtonAddEmployee";

function EmployeesTable<TData, TValue>({
  columns,
  data,
  totalCount,
}: TableProps<TData, TValue>) {
  const table = useDataTable(data, columns);

  return (
    <section className="mt-8 max-md:pb-16 container mx-auto">
      <div className="rounded-2xl border-0 bg-card  py-3 shadow-xl">
        <div className="flex gap-2 max-sm:flex-col max-sm:flex-wrap sm:items-center">
          <SearchBar
            placeholder="Search employees"
            containerClassName="flex-1"
          />

          <ButtonAddEmployee />
        </div>

        <div className="mt-8">
          <div className="w-full">
            <CustomTable
              table={table}
              columnsLength={columns.length}
              className="[&_td]:capitalize border-t border-[#E2E2E2] [&_th]:py-4 hover:[&_thead>tr]:bg-secondary-50 [&_thead]:bg-secondary-50"
            />
          </div>

          <div className="flex flex-col items-center gap-3 py-4 md:flex-row md:justify-between">
            <div>
              <Pagination totalCount={totalCount || 1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeesTable;
