import type { IColumnsTableType } from "@src/types/common";
import cn from "classnames";
import { Input } from "@src/components";

type ITableType = "check" | "radio" | "none";

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  type: ITableType;
  handleCheckAllChange: () => void;
  checkAll: boolean;
}

const TableHeader = <T, K extends keyof T>({
  columns,
  type = "none",
  handleCheckAllChange,
  checkAll = false,
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
      <tr>
        {type == "check" && (
          <th
            className={cn(
              "w-[77px] border-b-2 pt-4 pb-[0.81rem] border-slate-50 text-black text-sm font-medium text-left"
            )}
          >
            <Input
              name="checkAll"
              type="checkbox"
              id="checkAll"
              disabled={false}
              checked={checkAll}
              className="ml-[0.69rem]"
              onChange={handleCheckAllChange}
            />
          </th>
        )}
        {headers}
      </tr>
    </thead>
  );
};

export default TableHeader;
