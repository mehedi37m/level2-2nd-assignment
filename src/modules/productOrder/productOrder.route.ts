import express from "express";
import { ProductOrderController } from "./productOrder.controller";

const router = express.Router();

router.post("/", ProductOrderController.createProduct);

router.get("/all", ProductOrderController.getAllProductOrder);

router.get("/", ProductOrderController.getSearchProductOrder);

export const ProductOrderRoutes = router;
