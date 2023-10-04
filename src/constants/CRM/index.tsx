import { type ICart, type IProduct } from "@src/types/CRM";
import { formatDate } from "@src/utils";

export const PRODUCT_LIST: Array<
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
    category: [
      {
        size: "M",
        color: "Đen",
        price: 500000,
        inventory: 123,
      },
      {
        size: "L",
        color: "Đen",
        price: 500000,
        inventory: 0,
      },
      {
        size: "S",
        color: "Đen",
        price: 500000,
        inventory: 0,
      },
    ],
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

export const CART_LIST: Array<ICart> = [
  {
    productId: "DH001",
    productName: "Áo thun Nam mùa hè năng động - L -Đen",
    amount: 2,
    price: 500000,
  },
  {
    productId: "DH001",
    productName: "Áo thun Nam mùa hè năng động - S -Đen",
    amount: 1,
    price: 500000,
  },
  {
    productId: "DH003",
    productName: "Áo khoác mùa đông - S",
    amount: 1,
    price: 1120000,
  },
];
