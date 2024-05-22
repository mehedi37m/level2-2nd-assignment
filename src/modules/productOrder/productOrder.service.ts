import Purchase from "../productOrder.model";
import PurchaseModel from "../productOrder.model";
import { PurchaseO } from "./productOrder.interface";

const createProductOrderDB = async (ProductOrderData: PurchaseO) => {
  const productOrder = new Purchase(ProductOrderData);
  const result = await PurchaseModel.create(productOrder);
  return result;
};

const getAllProductOrderFrom = async () => {
  const result = await PurchaseModel.find();
  return result;
};

// Search products by a term
const getSearchProductOrderFrom = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  const result = await PurchaseModel.find({ email: regex });
  return result;
};

export const ProductOrderServices = {
  createProductOrderDB,
  getAllProductOrderFrom,
  getSearchProductOrderFrom,
};
