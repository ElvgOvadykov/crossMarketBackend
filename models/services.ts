import { Schema, model } from "mongoose";

const ServiceSchema = new Schema({
  organizationId: { type: String, require: true },
  name: { type: String, require: true },
});

export default model("Service", ServiceSchema);
