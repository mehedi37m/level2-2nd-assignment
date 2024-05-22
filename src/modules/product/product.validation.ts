import { z } from "zod";

// Define the Variant schema
const VariantSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1),
});

// Define the Inventory schema
const InventorySchema = z.object({
  quantity: z.number().int(),
  inStock: z.boolean(),
});

// Define the ProductDB schema
const ProductZodValidationSchema = z.object({
  name: z.string().min(1).max(20),
  description: z.string().min(1),
  price: z.number(),
  category: z.string().min(1),
  tags: z.enum(["smartphone", "Apple", "ios"]),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

export default ProductZodValidationSchema;
