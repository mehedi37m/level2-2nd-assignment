import { Schema, model, Document, Model } from "mongoose";
import { Inventory, ProductDB, Variant } from "./product/product.interface";

// Create the Variant schema
const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String,required: true   },
});

// Create the Inventory schema
const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true  },
  inStock: { type: Boolean, required: true  },
});

// Create the Product schema
const productSchema = new Schema<ProductDB>({
  name: { type: String,  required: true  },
  description: { type: String,required: true  },
  price: { type: Number, required: true  },
  category: { type: String, required: true  },
  tags: { type: String, enum: ["smartphone", "Apple", "ios"]  },
  variants: { type: [variantSchema], required: true  },
  inventory: { type: inventorySchema, required: true  },
});

// Create and export the Product model
const ProductModel = model<ProductDB>("Product", productSchema);

export default ProductModel;
