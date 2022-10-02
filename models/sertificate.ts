import { Timestamp } from "mongodb";
import { Schema, model } from "mongoose";

const SertificateSchema = new Schema({
  organizationId: { type: String, require: true },
  userId: { type: String, require: true },
  serviceId: { type: String, require: true },
  denomination: { type: Number, require: true },
  expirationDate: { type: Timestamp, require: true },
  isUsed: { type: Boolean, require: true },
});

export default model("Sertificate", SertificateSchema);
