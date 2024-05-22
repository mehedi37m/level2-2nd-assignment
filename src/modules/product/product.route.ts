import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-student", ProductController.createProduct);

router.get('/all', ProductController.getAllProduct);

router.get('/:productId',ProductController.getSingleProduct)

router.delete('/:productId',ProductController.getSingleProductDelete)

router.get('/',ProductController.getSearchProduct)


export const ProductRoutes = router;
