import type { IColumnsTableType } from "@src/types/common";
import TableRow from "../TableRow";

interface TableRowsProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  dataSource: Array<
    T & {
      children?: T[];
    }
  >;
}

const TableRows = <T, K extends keyof T>({
  dataSource,
  columns,
}: TableRowsProps<T, K>): JSX.Element => {
  const rows = dataSource.map((row, index) => {
    return (
      <TableRow key={`rows-${index}`} dataSource={row} columns={columns} />
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
