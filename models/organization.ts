import { Schema, model } from "mongoose";

const OrganizationSchema = new Schema({
  name: { type: String, require: true },
  founder: { type: String, require: true },
});

export default model("Organization", OrganizationSchema);
