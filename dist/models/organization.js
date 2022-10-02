"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrganizationSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    founder: { type: String, require: true },
});
exports.default = (0, mongoose_1.model)("Organization", OrganizationSchema);
