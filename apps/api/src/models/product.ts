// C:\Users\Hp\my-turborepo\apps\api\src\models\product.ts
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Product = model('Product', productSchema);
