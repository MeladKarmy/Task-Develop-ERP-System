import { ColumnDef } from "@tanstack/react-table";

export type Employee= {
id:string;
email:string;
startDate:string;
active:boolean;
phone:string;
role:string;
name:string
imageUrl?:string
}
export type TableProps<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  totalCount: number;
};
export type NavLinkType = {
  label: string;
  iconName: JSX.Element;
  href: string;
};
