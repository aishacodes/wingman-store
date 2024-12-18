import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SortConfig, TableProps } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TableWidget<T extends Record<string, any>>({
  data = [],
  columns = [],
  itemsPerPage = 5,
  onRowClick,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: null,
    direction: 'asc',
  });

  const sortedData = [...data].sort((a: T, b: T) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (key: keyof T) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  const goToPage = (page: number): void => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const getSortIcon = (columnKey: keyof T) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
    ) : (
      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
    );
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray1 rounded-lg bg-white">
          <thead className="bg-[#F9FAFB] border-b border-gray1">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-2 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-2 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-500 whitespace-nowrap"
                  >
                    {column.key == 'title' ? (
                      <div className="flex items-center gap-x-2 md:gap-x-4">
                        <img src={row.image} className="w-8 h-8 md:w-10 md:h-10" alt="" />
                        <p>{row.title}</p>
                      </div>
                    ) : column.key == 'price' ? (
                      '$' + row[column.key]
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-2 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="p-1 md:p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="First page"
          >
            <ChevronsLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 md:p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <span className="text-xs md:text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 md:p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-1 md:p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Last page"
          >
            <ChevronsRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
        <div className="text-xs md:text-sm text-gray-700">
          Showing {startIndex + 1} to{' '}
          {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}{' '}
          entries
        </div>
      </div>
    </div>
  );
}

export default TableWidget;