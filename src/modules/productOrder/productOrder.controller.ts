import { Request, Response } from "express";
import { ProductOrderServices } from "./productOrder.service";
import PurchaseZodSchema from "./prodcutOrder.zod.validaiton";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { productOrder: productOrderData } = req.body;
    const zodOder = PurchaseZodSchema.parse(productOrderData)
    const result = await ProductOrderServices.createProductOrderDB(zodOder);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const getAllProductOrder = async (req: Request, res: Response) => {
  try {
    const result = await ProductOrderServices.getAllProductOrderFrom();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSearchProductOrder = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email parameter is required." });
    }

    const products = await ProductOrderServices.getSearchProductOrderFrom(
      email as string
    );
    res.status(200).json({
      success: true,
      message: `Products matching email '${email}' fetched successfully!`,
      data: products,
    });
  } catch (error) {
    console.error("Error searching product orders:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const ProductOrderController = {
  createProduct,
  getAllProductOrder,
  getSearchProductOrder,
};
