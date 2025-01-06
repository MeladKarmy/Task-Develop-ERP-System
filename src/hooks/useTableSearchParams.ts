import { useSearchParams } from 'react-router-dom';

const useTableSearchParams = () => {
  const [searchParams] = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;
  const receiptsPageIndex = Number(searchParams.get('receiptsPageIndex')) || 1;
  const overduePageIndex = Number(searchParams.get('overduePageIndex')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;
  const searchValue = searchParams.get('searchValue') || '';
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');
  const receiptsFromDate = searchParams.get('receiptsFromDate');
  const receiptsToDate = searchParams.get('receiptsToDate');
  const categoryIds = searchParams.getAll('categoryIds');
  const status = searchParams.get('status');

  return {
    pageIndex,
    receiptsPageIndex,
    overduePageIndex,
    pageSize,
    searchValue,
    fromDate,
    toDate,
    receiptsFromDate,
    receiptsToDate,
    categoryIds,
    status,
  };
};

export default useTableSearchParams;
