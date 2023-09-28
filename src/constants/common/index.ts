import type { ICMRRoute, IRoute } from "@src/types/common";
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
