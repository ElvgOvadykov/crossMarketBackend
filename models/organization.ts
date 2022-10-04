import { Schema, model } from "mongoose";

const OrganizationSchema = new Schema({
  phone: { type: String, require: true },
  name: { type: String, require: true },
  founderName: { type: String, require: true },
  isVerified: { type: Boolean },
});

export default model("Organization", OrganizationSchema);
