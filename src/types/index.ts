export interface Column<T> {
  key: keyof T;
  label: string;
}

export interface SortConfig<T> {
  key: keyof T | null;
  direction: 'asc' | 'desc';
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
  onRowClick?: (row: T) => void;
}
export interface ConsultationData {
  day: string;
  incoming: number;
  answered: number;
  expertsOnline: number;
}

export interface WeeklyData {
  period: string;
  consultations: number;
  ordersClosed: number;
}
