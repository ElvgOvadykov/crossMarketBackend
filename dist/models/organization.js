"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrganizationSchema = new mongoose_1.Schema({
    telegramId: { type: String, require: true, unique: true },
    phone: { type: String, require: true },
    name: { type: String, require: true, unique: true },
    founderName: { type: String, require: true },
    isVerified: { type: Boolean },
});
exports.default = (0, mongoose_1.model)("Organization", OrganizationSchema);
