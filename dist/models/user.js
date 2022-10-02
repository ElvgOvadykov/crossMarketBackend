"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    number: { type: String, unique: true, require: true },
    telegramId: { type: String, unique: true, require: true },
    role: { type: Number, require: true },
    organizationId: { type: String },
});
exports.default = (0, mongoose_1.model)("User", UserSchema);
