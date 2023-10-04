import type { IColumnsTableType } from "@src/types/common";
import { Table } from "@src/components";
import { type FC } from "react";
import { formatDate } from "@src/utils";

export interface IOrder {
  orderId: string;
  customerName: string;
  status: string;
  payment: string;
  channel: string;
  totalCost: string;
  createdAt: string;
}

const TableOrderList: FC = () => {
  const COLUMNS: IColumnsTableType<IOrder, keyof IOrder>[] = [
    { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
    { title: "Khách hàng", dataIndex: "customerName", key: "customerName" },
    { title: "Tình trạng", dataIndex: "status", key: "status" },
    { title: "Thanh toán", dataIndex: "payment", key: "payment" },
    {
      title: "Kênh",
      dataIndex: "channel",
      key: "channel",
    },
    { title: "Tổng tiền", dataIndex: "totalCost", key: "totalCost" },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
  ];

  const DATA_SOURCE: Array<
    IOrder & {
      children?: IOrder[];
    }
  > = [
    {
      orderId: "DH001",
      customerName: "Nguyễn Hoàng Văn A",
      status: "Đã tạo",
      payment: "Chưa thanh toán",
      channel: "Shopee",
      totalCost: "1.111.111 VNĐ",
      createdAt: formatDate(new Date(2022, 0, 1, 14, 2)),
    },
    {
      orderId: "DH002",
      customerName: "----",
      status: "Đóng gói",
      payment: "Đã thanh toán",
      channel: "Shopee",
      totalCost: "1.111.111 VNĐ",
      createdAt: formatDate(new Date(2022, 1, 2, 14, 2)),
    },
    {
      orderId: "DH003",
      customerName: "----",
      status: "Đóng gói",
      payment: "Đã thanh toán",
      channel: "Shopee",
      totalCost: "1.111.111 VNĐ",
      createdAt: formatDate(new Date(2022, 2, 3, 14, 2)),
    },
    {
      orderId: "",
      customerName: "Nguyễn Hoàng Văn A",
      status: "Đã tạo",
      payment: "Chưa thanh toán",
      channel: "Shopee",
      totalCost: "1.111.111 VNĐ",
      createdAt: formatDate(new Date(2022, 3, 4, 14, 2)),
    },
  ];

  return <Table type="check" columns={COLUMNS} dataSource={DATA_SOURCE} />;
};

export default TableOrderList;
