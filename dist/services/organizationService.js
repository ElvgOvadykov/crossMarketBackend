"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const organization_1 = __importDefault(require("../models/organization"));
class OrganizationService {
    requestToSingUp(newOrganization) {
        return __awaiter(this, void 0, void 0, function* () {
            const { phone, name, founderName } = newOrganization;
            const organization = yield organization_1.default.create({
                phone,
                name,
                founderName,
                isVerified: false,
            });
            return organization;
        });
    }
    verifyOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield organization_1.default.findById(organizationId))) {
                return;
            }
            yield organization_1.default.findOneAndUpdate({ _id: organizationId }, { isVerified: true });
        });
    }
}
exports.default = new OrganizationService();
