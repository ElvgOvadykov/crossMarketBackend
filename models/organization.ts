import { Schema, model } from "mongoose";

const OrganizationSchema = new Schema({
  telegramId: { type: String, require: true, unique: true },
  phone: { type: String, require: true },
  name: { type: String, require: true, unique: true },
  founderName: { type: String, require: true },
  isVerified: { type: Boolean },
});

export default model("Organization", OrganizationSchema);
