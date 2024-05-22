import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const result = await ProductServices.createProductDB(productData);

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
      message: 'received successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
