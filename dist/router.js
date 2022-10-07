"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("./controllers/userController"));
const organizationController_1 = __importDefault(require("./controllers/organizationController"));
const router = express_1.default.Router();
router.post("/telegram/user-sign-up", userController_1.default.telegramSignUp);
router.post("/telegram/organization-request-sign-up", organizationController_1.default.requestToSingUp);
router.post("/organization/verify", organizationController_1.default.verifyOrganization);
router.get("/organization/:telegramId", organizationController_1.default.getOrganizationByTelegramId);
exports.default = router;
