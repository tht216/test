import type { Story, StoryDefault } from "@ladle/react";
import {
  Table,
  TableCartList,
  TableOrderList,
  TableProductDetail,
  TableProductList,
  Tag,
} from "@src/components";
import { DATA_SOURCE } from "@src/constants/common";
import type { IColumnsTableType, IOrder } from "@src/types/common";
import React from "react";

type ITypeTable =
  | "productList"
  | "common"
  | "orderList"
  | "productDetail"
  | "cartList";

interface Props {
  typeTable: ITypeTable;
}

const COLUMNS: IColumnsTableType<IOrder, keyof IOrder>[] = [
  { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
  { title: "Khách hàng", dataIndex: "customerName", key: "customerName" },
  { title: "Tình trạng", dataIndex: "status", key: "status" },
  { title: "Thanh toán", dataIndex: "payment", key: "payment" },
  {
    title: "Kênh",
    key: "channel",
    render: (item) => {
      return (
        <Tag color="green" filled={true}>
          {`${item.channel}`}
        </Tag>
      );
    },
  },
  { title: "Tổng tiền", dataIndex: "totalCost", key: "totalCost" },
  { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
];

export default {
  title: "Components",
  argTypes: {
    typeTable: {
      defaultValue: "productList",
      options: [
        "productList",
        "common",
        "orderList",
        "productDetail",
        "cartList",
      ],
      label: "Table Type",
      control: {
        type: "select",
      },
    },
  },
} satisfies StoryDefault<Props>;

export const TableStory: Story<Props> = ({ typeTable }) => {
  const TYPE_TABLE_MAPPING = {
    common: <Table type="check" columns={COLUMNS} dataSource={DATA_SOURCE} />,
    productList: <TableProductList />,
    orderList: <TableOrderList />,
    productDetail: <TableProductDetail />,
    cartList: <TableCartList />,
  };
  return (
    <div className="flex flex-col w-full h-full">
      {TYPE_TABLE_MAPPING[typeTable]}
    </div>
  );
};

TableStory.storyName = "Table";
