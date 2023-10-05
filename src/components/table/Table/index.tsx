import type { IColumnsTableType } from "@src/types/common";
import cn from "classnames";
import React, { type FC, useState } from "react";
import TableRows from "../TableRows";
import TableHeader from "../TableHeader";

type ITableType = "check" | "radio" | "none";

export interface IExpandable<T> {
  expandedRowRender: FC<T>;
  rowExpandable: (record: T) => boolean;
}

interface TableProps<T, K extends keyof T> {
  className?: string;
  dataSource: Array<
    T & {
      children?: T[];
    }
  >;
  expandable?: IExpandable<T>;
  columns: Array<IColumnsTableType<T, K>>;
  type: ITableType;
}

const Table = <T, K extends keyof T>({
  dataSource,
  columns,
  className = "",
  expandable,
  type = "none",
}: TableProps<T, K>): JSX.Element => {
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  const handleCheckedAll = (check: boolean) => {
    setCheckedAll(check);
  };

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
        checkAll={checkedAll}
        onChange={() => setCheckedAll((prev) => !prev)}
        columns={columns}
        expandable={expandable}
        dataSource={dataSource}
        type={type}
      />
      <TableRows
        columns={columns}
        dataSource={dataSource}
        type={type}
        checkedAll={checkedAll}
        expandable={expandable}
        onCheckedAll={handleCheckedAll}
      />
    </table>
  );
};

export default Table;
