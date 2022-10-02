import Express from "express";
import UserController from "./controllers/userController";

const router = Express.Router();
const userController = new UserController();

router.post("/telegram-sign-up", userController.telegramSignUp);

export default router;
