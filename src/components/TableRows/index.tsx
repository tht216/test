import type { IColumnsTableType } from "@src/types/common";
import TableRow from "../TableRow";
import React, { useEffect, useState } from "react";

type ITableType = "check" | "radio" | "none";

interface Checkbox {
  id: number;
  checked: boolean;
}

interface TableRowsProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  dataSource: Array<
    T & {
      children?: T[];
    }
  >;
  type: ITableType;
  checkedAll: boolean;
  onCheckedAll?: (checkedAll: boolean) => void;
}

const TableRows = <T, K extends keyof T>({
  dataSource,
  columns,
  type = "none",
  checkedAll = false,
  onCheckedAll,
}: TableRowsProps<T, K>): JSX.Element => {
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>(
    dataSource.map((_, index3) => ({
      id: index3,
      checked: checkedAll,
    }))
  );

  const handleChecked = (check: boolean, id: number) => {
    setCheckboxes(
      checkboxes?.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: check } : checkbox
      )
    );
  };

  const handleCheckboxChange = (checkBoxId: number) => {
    const updatedCheckboxes = checkboxes?.map((checkbox) =>
      checkbox.id === checkBoxId
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    if (updatedCheckboxes)
      if (onCheckedAll)
        onCheckedAll(updatedCheckboxes.every((checkbox) => checkbox.checked));

    setCheckboxes(updatedCheckboxes);
  };

  useEffect(() => {
    setCheckboxes(
      dataSource.map((_, index3) => ({
        id: index3,
        checked: checkedAll,
      }))
    );
  }, [checkedAll, dataSource]);
  
  const rows = dataSource.map((row, index) => {
    return (
      <TableRow
        id={`rows-${index}`}
        key={`rows-${index}`}
        dataSource={row}
        columns={columns}
        type={type}
        checked={checkboxes[index].checked}
        onChecked={(check: boolean) => handleChecked(check, index)}
        onChange={() => handleCheckboxChange(index)}
      />
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
