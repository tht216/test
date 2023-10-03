import type { IColumnsTableType } from "@src/types/common";
import cn from "classnames";
import React from "react";
import TableRows from "../TableRows";
import { TableHeader } from "..";

type ITableType = "check" | "radio" | "none";

interface TableProps<T, K extends keyof T> {
  className?: string;
  dataSource: Array<
    T & {
      children?: T[];
    }
  >;
  columns: Array<IColumnsTableType<T, K>>;
  type: ITableType;
}

const Table = <T, K extends keyof T>({
  dataSource,
  columns,
  className,
  type = "none",
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
      <TableHeader
        checkAll={false}
        handleCheckAllChange={() => {}}
        columns={columns}
        type={type}
      />
      <TableRows columns={columns} dataSource={dataSource} type={type} checkedAll={false} />
    </table>
  );
};

export default Table;
