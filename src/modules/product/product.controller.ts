import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductZodValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const zodParseData = ProductZodValidationSchema.parse(productData)

    const result = await ProductServices.createProductDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: "all Product are received successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "received successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getProductUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { updatedProductData } = req.body;
    const result = await ProductServices.getProductFromDBUpdate(
      productId,
      updatedProductData,
    );
    res.status(200).json({
      success: true,
      message: "received successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProductDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result =
      await ProductServices.getSingleProductFromDBDelete(productId);

    res.status(200).json({
      success: true,
      message: "Delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSearchProduct = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  try {
    if (searchTerm) {
      const products = await ProductServices.getSearchProductFromDB(
        searchTerm as string,
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: products,
      });
    }
  } catch (error) {
    // res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

const getTotalProductCount = async () => {
  try {
    const allProducts = await ProductServices.getAllProductFromDB();
    const totalProductCount = allProducts.length;
    return totalProductCount;
    // console.log(totalProductCount.toString());
  } catch (error) {
    console.error("Error retrieving total product count:", error);
    return 0; // Return 0 if an error occurs
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getProductUpdate,
  getSingleProduct,
  getSingleProductDelete,
  getSearchProduct,
  getTotalProductCount,
};
