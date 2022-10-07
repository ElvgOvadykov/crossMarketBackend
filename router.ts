import Express from "express";
import userController from "./controllers/userController";
import organizationController from "./controllers/organizationController";

const router = Express.Router();

router.post("/telegram/user-sign-up", userController.telegramSignUp);
router.post(
  "/telegram/organization-request-sign-up",
  organizationController.requestToSingUp
);
router.post("/organization/verify", organizationController.verifyOrganization);
router.get(
  "/organization/:telegramId",
  organizationController.getOrganizationByTelegramId
);

export default router;
