import type { IColumnsTableType } from "@src/types/common";

interface TableRowsProps<T, K extends keyof T> {
  columns: Array<IColumnsTableType<T, K>>;
  dataSource: Array<T>;
}

const TableRows = <T, K extends keyof T>({
  dataSource,
  columns,
}: TableRowsProps<T, K>): JSX.Element => {
  const rows = dataSource.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <td
              key={`cell-${index2}`}
              className="text-zinc-800 pt-[1.69rem] pb-[1.44rem] text-sm font-normal border-b border-slate-50"
            >
              {column.render
                ? column.render(row[column.key])
                : `${row[column.key]}`}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
