import userService from "../services/userService";
import Express from "express";

class UserController {
  async telegramSignUp(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const userData = await userService.telegramSingUp(request.body);
    response.json(userData);
  }
}

export default new UserController();
