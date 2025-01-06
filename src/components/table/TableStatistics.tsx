import useTableSearchParams from "@/hooks/useTableSearchParams";

type TableStatisticsProps = {
  totalCount?: number;
};

function TableStatistics({ totalCount }: TableStatisticsProps) {
  const { pageIndex, pageSize } = useTableSearchParams();

  const totalShowing =
    pageSize * pageIndex > Number(totalCount || 0)
      ? totalCount
      : pageSize * pageIndex;

  return (
    <p className="text-sm text-muted-foreground">
      show : {totalShowing || 0} , total : {totalCount || pageSize}
    </p>
  );
}

export default TableStatistics;
