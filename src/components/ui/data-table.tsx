import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  className?: string;
  cell: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  title?: ReactNode;
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  className?: string;
};

export function DataTable<T>({
  title,
  columns,
  rows,
  rowKey,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10", className)}>
      {title && (
        <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4">
          {title}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-zinc-500">
              {columns.map((col) => (
                <th key={String(col.key)} className={cn("px-5 py-3", col.className)}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row) => (
              <tr
                key={rowKey(row)}
                className="text-zinc-300 transition-colors hover:bg-white/[0.02]"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className={cn("px-5 py-3", col.className)}>
                    {col.cell(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
