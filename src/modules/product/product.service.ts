import Product from "../product.model";
import ProductModel from "../product.model";
import { ProductDB } from "./product.interface";

const createProductDB = async (ProductData: ProductDB) => {
  const product = new Product(ProductData);
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// Delete Product
const getSingleProductFromDBDelete = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

// Search products by a term
const getSearchProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  const result = await ProductModel.find({ name: { $regex: regex } });
  return result;
};

export const ProductServices = {
  createProductDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  getSingleProductFromDBDelete,
  getSearchProductFromDB,
};
