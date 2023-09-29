import type { Story, StoryDefault } from "@ladle/react";
import { Table, Tag } from "@src/components";
import { DATA_SOURCE } from "@src/constants/common";
import type { IColumnsTableType, IOrder } from "@src/types/common";
import React from "react";

const COLUMNS: IColumnsTableType<IOrder, keyof IOrder>[] = [
  { title: "Mã đơn hàng", dataIndex: "orderId", key: "orderId" },
  { title: "Khách hàng", dataIndex: "customerName", key: "customerName" },
  { title: "Tình trạng", dataIndex: "status", key: "status" },
  { title: "Thanh toán", dataIndex: "payment", key: "payment" },
  {
    title: "Kênh",
    key: "channel",
    render: (channel) => {
      return (
        <Tag color="green" filled={true}>
          {channel}
        </Tag>
      );
    },
  },
  { title: "Tổng tiền", dataIndex: "totalCost", key: "totalCost" },
  { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
];

export default {
  title: "Components",
} satisfies StoryDefault;

export const TableStory: Story = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Table columns={COLUMNS} dataSource={DATA_SOURCE} />
    </div>
  );
};

TableStory.storyName = "Table";
