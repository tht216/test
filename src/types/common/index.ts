import type { FC } from "react";

export interface IRoute {
  id: number;
  href: string;
  routeName: string;
}

export interface ICMRRoute {
  idRoute: number;
  hrefRoute: string;
  routeName: string;
  logoRoute: string;
}

export interface IOrder {
  orderId: string;
  customerName: string;
  status: string;
  payment: string;
  channel: string;
  totalCost: string;
  createdAt: string;
}

export interface IColumnsTableType<T, K extends keyof T> {
  key: K;
  dataIndex?: K;
  title: string;
  width?: number;
  render?: FC<T>;
}
