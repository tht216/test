import type { IColumnsTableType } from "@src/types/common";
import extendedLogo from "@src/assets/icons/common/extended.svg";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Input } from "@src/components";

type ITableType = "check" | "radio" | "none";

interface Checkbox {
  id: number;
  checked: boolean;
}

interface TableRowProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  dataSource: T & {
    children?: T[];
  };
  type: ITableType;
  id: string;
  checked: boolean;
  onChecked: (checked: boolean) => void;
  onChange: () => void;
}

const TableRow = <T, K extends keyof T>({
  dataSource,
  columns,
  type = "none",
  id = "",
  checked = false,
  onChecked,
  onChange,
}: TableRowProps<T, K>): JSX.Element => {
  const [isExtended, setIsExtended] = useState(false);
  const [checkboxes, setCheckboxes] = useState<Checkbox[] | undefined>(
    dataSource.children?.map((_, index3) => ({
      id: index3,
      checked: checked,
    }))
  );

  useEffect(() => {
    setCheckboxes(
      dataSource.children?.map((_, index3) => ({
        id: index3,
        checked: checked,
      }))
    );
  }, [checked, dataSource.children]);

  const handleCheckboxChange = (checkBoxId: number) => {
    const updatedCheckboxes = checkboxes?.map((checkbox) =>
      checkbox.id === checkBoxId
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    if (updatedCheckboxes)
      onChecked(updatedCheckboxes.every((checkbox) => checkbox.checked));

    setCheckboxes(updatedCheckboxes);
  };

  return (
    <>
      <tr>
        {type === "check" && (
          <td
            className={classNames(
              isExtended ? "bg-neutral-100" : "",
              "w-[77px] text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal border-y border-slate-50 transition-all duration-50"
            )}
          >
            <Input
              id={id}
              name={id}
              checked={checked}
              type="checkbox"
              disabled={false}
              className="ml-[0.69rem]"
              onChange={onChange}
            />
          </td>
        )}
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
            {type === "check" && (
              <td
                className={classNames(
                  "text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal transition-all duration-50 bg-neutral-80"
                )}
              >
                <Input
                  id={`row-${index3}`}
                  name={`row-${index3}`}
                  checked={checkboxes?.[index3].checked}
                  type="checkbox"
                  disabled={false}
                  className="ml-[0.69rem]"
                  onChange={() => handleCheckboxChange(index3)}
                />
              </td>
            )}
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
