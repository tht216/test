export interface IProductClassification {
  color: string;
  size: string;
  price: number;
  inventory: number;
}
export interface IProduct {
  productId: string;
  productName: string;
  status: boolean;
  inventory: number;
  createdAt: string;
  category?: IProductClassification[];
}

export interface ICart {
  productId: string;
  productName: string;
  amount: number;
  price: number;
}
