import UserService from "../services/userService";
import Express from "express";

class UserController {
  async telegramSignUp(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const service = new UserService();

    const userData = await service.telegramSingUp(request.body);
    response.json(userData);
  }
}

export default UserController;
