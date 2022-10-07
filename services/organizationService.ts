import OrganizationModel from "../models/organization";

class OrganizationService {
  async getOrganizationByTelegramId(telegramId: string) {
    const organization = await OrganizationModel.findOne({
      telegramId: telegramId,
    });

    return organization;
  }

  async requestToSingUp(newOrganization: any) {
    const { telegramId, phone, name, founderName } = newOrganization;

    const organization = await OrganizationModel.create({
      telegramId,
      phone,
      name,
      founderName,
      isVerified: false,
    });

    return organization;
  }

  async verifyOrganization(organizationId: string) {
    if (!(await OrganizationModel.findById(organizationId))) {
      return;
    }

    const organization = await OrganizationModel.findOneAndUpdate(
      { _id: organizationId },
      { isVerified: true },
      {
        new: true,
      }
    );

    return organization;
  }
}

export default new OrganizationService();
