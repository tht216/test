import type { IColumnsTableType } from "@src/types/common";
import { Table, Tag } from "@src/components";
import { type FC } from "react";
import { formatDate } from "@src/utils";

interface IProduct {
  productId: string;
  productName: string;
  status: boolean;
  inventory: number;
  createdAt: string;
}

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

const DATA_SOURCE: Array<
  IProduct & {
    children?: IProduct[];
  }
> = [
  {
    productId: "DH001",
    productName: "Áo thun Nam mùa hè năng động",
    status: false,
    inventory: 2391,
    createdAt: formatDate(new Date(2022, 0, 1, 10, 10)),
  },
  {
    productId: "DH002",
    productName: "Áo khoác nữ",
    status: true,
    inventory: 1920,
    createdAt: formatDate(new Date(2022, 1, 2, 14, 2)),
  },
  {
    productId: "DH003",
    productName: "Áo khoác mùa đông",
    status: true,
    inventory: 2391,
    createdAt: formatDate(new Date(2022, 2, 3, 15, 3)),
  },
];
const TableProductList: FC = () => {
  return <Table type="check" columns={COLUMNS} dataSource={DATA_SOURCE} />;
};

export default TableProductList;
