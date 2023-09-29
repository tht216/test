import type { ICMRRoute, IColumnsTableType, IOrder, IRoute } from "@src/types/common";
import statistic from "@src/assets/icons/common/statistic.svg";
import order from "@src/assets/icons/common/order.svg";
import product from "@src/assets/icons/common/product.svg";
export const ROUTES: Array<IRoute> = [
  {
    id: 1,
    href: "/",
    routeName: "Tổng quan",
  },
  {
    id: 2,
    href: "/feature",
    routeName: "Tính năng",
  },
  {
    id: 3,
    href: "/price",
    routeName: "Bảng giá",
  },
  {
    id: 4,
    href: "/customer",
    routeName: "Khách hàng",
  },
];

export const CMR_ROUTES: Array<ICMRRoute> = [
  {
    idRoute: 1,
    routeName: "Thống kê",
    hrefRoute: "/statistic",
    logoRoute: statistic,
  },
  {
    idRoute: 2,
    routeName: "Quản lý sản phẩm",
    hrefRoute: "/product",
    logoRoute: product,
  },
  {
    idRoute: 3,
    routeName: "Quản lý đơn hàng",
    hrefRoute: "/order",
    logoRoute: order,
  },
];

export const COLUMNS: IColumnsTableType<IOrder, keyof IOrder>[] = [
  { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
  { title: "Khách hàng", dataIndex: "customerName", key: "customerName" },
  { title: "Tình trạng", dataIndex: "status", key: "status" },
  { title: "Thanh toán", dataIndex: "payment", key: "payment" },
  {
    title: "Kênh",
    key: "channel",
    render: (type) => {
      return type;
    },
  },
  { title: "Tổng tiền", dataIndex: "totalCost", key: "totalCost" },
  { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
];



export const DATA_SOURCE: Array<IOrder> = [
  {
    orderId: "DH001",
    customerName: "Nguyễn Hoàng Văn A",
    status: "Đã tạo",
    payment: "Chưa thanh toán",
    channel: "Shopee",
    totalCost: "1.111.111 VNĐ",
    createdAt: "01/01/2022 10:10 AM",
  },
  {
    orderId: "DH002",
    customerName: "----",
    status: "Đóng gói",
    payment: "Đã thanh toán",
    channel: "Shopee",
    totalCost: "1.111.111 VNĐ",
    createdAt: "01/01/2022 10:10 AM",
  },
  {
    orderId: "DH003",
    customerName: "----",
    status: "Đóng gói",
    payment: "Đã thanh toán",
    channel: "Shopee",
    totalCost: "1.111.111 VNĐ",
    createdAt: "01/01/2022 10:10 AM",
  },
  {
    orderId: "",
    customerName: "Nguyễn Hoàng Văn A",
    status: "Đã tạo",
    payment: "Chưa thanh toán",
    channel: "Shopee",
    totalCost: "1.111.111 VNĐ",
    createdAt: "01/01/2022 10:10 AM",
  },
];
