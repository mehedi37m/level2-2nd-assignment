import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { ProductOrderRoutes } from "./modules/productOrder/productOrder.route";
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", ProductOrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

console.log(process.cwd());
export default app;
