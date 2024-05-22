import { Model } from "mongoose";

export type PurchaseO = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

export type PurchaseOrder = Model<PurchaseO>;
