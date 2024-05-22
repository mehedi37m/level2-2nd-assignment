import mongoose, { Schema, Document } from "mongoose";
import { PurchaseO } from "./productOrder/productOrder.interface";

const PurchaseSchema = new Schema<PurchaseO>({
  email: { type: String },
  productId: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const PurchaseModel = mongoose.model<PurchaseO>("Purchase", PurchaseSchema);

export default PurchaseModel;
