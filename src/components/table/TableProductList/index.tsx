import type { IColumnsTableType } from "@src/types/common";
import { Table, Tag } from "@src/components";
import { type FC } from "react";
import { PRODUCT_LIST } from "@src/constants/CRM";
import { type IProduct } from "@src/types/CRM";

const TableProductList: FC = () => {
  const COLUMNS: IColumnsTableType<IProduct, keyof IProduct>[] = [
    { title: "Mã sản phẩm / SKU", dataIndex: "productId", key: "productId" },
    { title: "Tên sản phẩm", dataIndex: "productName", key: "productName" },
    {
      title: "Tình trạng",
      key: "status",
      render: (item) => {
        return (
          <Tag color={item.status ? "green" : "red"} filled={true}>
            {item.status ? "Được phép bán" : "Chưa được phép bán"}
          </Tag>
        );
      },
    },
    { title: "Số lượng tồn kho", dataIndex: "inventory", key: "inventory" },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
  ];

  return <Table type="check" columns={COLUMNS} dataSource={PRODUCT_LIST} />;
};

export default TableProductList;
