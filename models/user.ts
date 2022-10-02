import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  number: { type: String, unique: true, require: true },
  telegramId: { type: String, unique: true, require: true },
  role: { type: Number, require: true },
  organizationId: { type: String },
});

export default model("User", UserSchema);
