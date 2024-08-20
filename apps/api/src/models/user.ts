// C:\Users\Hp\my-turborepo\apps\api\src\models\user.ts
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false },
});

export const User = model('User', userSchema);
