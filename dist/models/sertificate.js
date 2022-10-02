"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const SertificateSchema = new mongoose_1.Schema({
    organizationId: { type: String, require: true },
    userId: { type: String, require: true },
    serviceId: { type: String, require: true },
    denomination: { type: Number, require: true },
    expirationDate: { type: mongodb_1.Timestamp, require: true },
    isUsed: { type: Boolean, require: true },
});
exports.default = (0, mongoose_1.model)("Sertificate", SertificateSchema);
