import { z } from "zod";

// Define the PurchaseO schema
const PurchaseZodSchema = z.object({
  email: z.string().email(), 
  productId: z.string(), 
  price: z.number().nonnegative(), 
  quantity: z.number().int().nonnegative(), 
});


export default PurchaseZodSchema;