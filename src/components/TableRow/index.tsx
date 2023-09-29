import type { IColumnsTableType } from "@src/types/common";
import extendedLogo from "@src/assets/icons/common/extended.svg";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";

interface TableRowProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  dataSource: T & {
    children?: T[];
  };
}

const TableRow = <T, K extends keyof T>({
  dataSource,
  columns,
}: TableRowProps<T, K>): JSX.Element => {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <>
      <tr>
        {columns.map((column, index2) => {
          return (
            <td
              key={`cell-${index2}`}
              className={classNames(
                isExtended ? "bg-neutral-100" : "",
                "text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal border-y border-slate-50 transition-all duration-50"
              )}
            >
              {column.render
                ? column.render(dataSource)
                : `${dataSource[column.key]}`}
            </td>
          );
        })}
        {dataSource.children && (
          <td
            className={classNames(
              isExtended ? "bg-neutral-100" : "",
              "text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal border-y border-slate-50 transition-all duration-50"
            )}
          >
            <Image
              src={extendedLogo}
              alt="extended"
              className={classNames(
                !isExtended ? "rotate-180" : "",
                "transition-all duration-100 cursor-pointer"
              )}
              onClick={() => setIsExtended((prev) => !prev)}
            />
          </td>
        )}
      </tr>
      {isExtended &&
        dataSource.children?.map((value, index3) => (
          <tr key={`row-${index3}`}>
            {columns.map((column, index4) => {
              return (
                <td
                  key={`cell-${index4}`}
                  className="text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal transition-all duration-50 bg-neutral-80"
                >
                  {column.render
                    ? column.render(value)
                    : `${value[column.key]}`}
                </td>
              );
            })}
          </tr>
        ))}
    </>
  );
};

export default TableRow;
