import { Model } from "mongoose";

export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type ProductDB = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: "smartphone" | "Apple" | "ios";
  variants: Variant[];
  inventory: Inventory;
};

export type Product = Model<ProductDB>;
