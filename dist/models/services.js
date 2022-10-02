"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    organizationId: { type: String, require: true },
    name: { type: String, require: true },
});
exports.default = (0, mongoose_1.model)("Service", ServiceSchema);
