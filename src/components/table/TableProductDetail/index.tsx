import type { IColumnsTableType } from "@src/types/common";
import { Input, Table, Tag } from "@src/components";
import { useState, type FC } from "react";
import { PRODUCT_LIST } from "@src/constants/CRM";
import { type IProduct } from "@src/types/CRM";
import { type IExpandable } from "../Table";
import classNames from "classnames";
import { formatNumber } from "@src/utils";

interface Checkbox {
  id: string;
  checked: boolean;
}

const COLUMNS: IColumnsTableType<IProduct, keyof IProduct>[] = [
  { title: "Sản phẩm", dataIndex: "productName", key: "productName" },
  {
    title: "Số lượng tồn kho",
    render: (item) => {
      return (
        <Tag
          color={item.inventory !== 0 ? "green" : "red"}
          filled={false}
          className="w-[12.9375rem]"
        >
          {item.inventory !== 0 ? "Còn hàng" : "Hết hàng"}
        </Tag>
      );
    },
    key: "inventory",
  },
];

const TableProductDetail: FC = () => {
  const initCheckboxes = () => {
    const checkboxes: Checkbox[] = [];

    PRODUCT_LIST.forEach((value) => {
      if (value?.category)
        value.category.forEach((category) =>
          checkboxes.push({
            id: `${value.productName}-${category.color}-${category.size}`,
            checked: false,
          })
        );
    });

    return checkboxes;
  };

  const [checkboxes, setCheckboxes] = useState<Checkbox[]>(initCheckboxes);

  const handleChecked = (id: string) => {
    const updatedCheckboxes = checkboxes?.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  const expandable: IExpandable<IProduct> = {
    expandedRowRender: (record) =>
      record?.category?.map((value, index) => (
        <tr key={`sub-row-${index}`}>
          <td
            className={classNames(
              "text-zinc-800 py-[1.37rem] text-sm font-normal transition-all duration-50 bg-neutral-80"
            )}
          >
            <div className="flex gap-[1.31rem]">
              <Input
                type="checkbox"
                disabled={value.inventory === 0}
                name={`${record.productName}-${value.color}-${value.size}`}
                id={`${record.productName}-${value.color}-${value.size}`}
                checked={
                  checkboxes.find(
                    (element) =>
                      element.id ===
                      `${record.productName}-${value.color}-${value.size}`
                  )?.checked
                }
                {...{
                  onChange: () =>
                    handleChecked(
                      `${record.productName}-${value.color}-${value.size}`
                    ),
                }}
              />
              <div className="flex flex-col gap-[0.63rem]">
                <p>
                  {value.color} - {value.size}
                </p>
                <p> Mã sản phẩm / SKU: {record.productId}</p>
              </div>
            </div>
          </td>
          <td
            className={classNames(
              "text-zinc-800 py-[1.37rem] text-sm font-normal transition-all duration-50 bg-neutral-80"
            )}
          >
            <div className="flex justify-between w-[12.9375rem]">
              <Tag
                color={value.inventory !== 0 ? "green" : "red"}
                filled={false}
              >
                {value.inventory !== 0 ? "Còn hàng" : "Hết hàng"}
              </Tag>
              <span>{formatNumber(value.price)} VND</span>
            </div>
          </td>
          <td
            className={classNames(
              "text-zinc-800 py-[1.37rem] text-sm font-normal transition-all duration-50 bg-neutral-80"
            )}
          ></td>
        </tr>
      )),
    rowExpandable: (record) => (record?.category ? true : false),
  };

  return (
    <Table
      type="none"
      columns={COLUMNS}
      dataSource={PRODUCT_LIST}
      expandable={expandable}
    />
  );
};

export default TableProductDetail;
