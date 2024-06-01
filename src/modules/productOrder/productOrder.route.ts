import express from "express";
import { ProductOrderController } from "./productOrder.controller";

const router = express.Router();

router.post("/", ProductOrderController.createProduct);

router.get("/", ProductOrderController.getAllProductOrder);

router.get("/email", ProductOrderController.getSearchProductOrder);

export const ProductOrderRoutes = router;
