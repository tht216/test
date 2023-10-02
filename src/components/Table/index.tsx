import type { IColumnsTableType } from "@src/types/common";
import cn from "classnames";
import React from "react";
import TableRows from "../TableRows";
import { TableHeader } from "..";

interface TableProps<T, K extends keyof T> {
  className?: string;
  dataSource: Array<
    T & {
      children?: T[];
    }
  >;
  columns: Array<IColumnsTableType<T, K>>;
}

const Table = <T, K extends keyof T>({
  dataSource,
  columns,
  className,
}: TableProps<T, K>): JSX.Element => {
  return (
    <table
      className={cn(
        className,
        "table-auto border-collapse border-y border-slate-50 w-full"
      )}
    >
      <colgroup>
        {columns.map((_, index) => (
          <col key={index} />
        ))}
      </colgroup>
      <TableHeader columns={columns} />
      <TableRows columns={columns} dataSource={dataSource} />
    </table>
  );
};

export default Table;
