import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProduct);

// get all Product
router.get("/", ProductController.getAllProduct);

router.get("/totalProduct", ProductController.getTotalProductCount);

// Single Product
router.get("/:productId", ProductController.getSingleProduct);

// update data
router.put("/:productId", ProductController.getProductUpdate);

// delete product
router.delete("/:productId", ProductController.getSingleProductDelete);

router.get("/searchTerm", ProductController.getSearchProduct);

export const ProductRoutes = router;
