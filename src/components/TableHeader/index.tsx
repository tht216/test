import type { IColumnsTableType } from "@src/types/common";
import cn from "classnames";

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
}

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    const WIDTH_MAPPING = {
      width: column.width ? `w-[${column.width}px]` : "",
    };

    return (
      <th
        key={`headCell-${index}`}
        className={cn(
          WIDTH_MAPPING["width"],
          "border-b-2 pt-4 pb-[0.81rem] border-slate-50 text-black text-sm font-medium text-left"
        )}
      >
        {column.title}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
