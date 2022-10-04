import UserModel from "../models/user";

class UserService {
  async telegramSingUp(newUser: any) {
    const { telegramId, role, organizationId } = newUser;

    if (await UserModel.findOne({ telegramId })) {
      return;
    }

    const user = await UserModel.create({
      telegramId,
      role,
      organizationId,
    });

    return user;
  }
}

export default new UserService();
