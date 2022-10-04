import OrganizationModel from "../models/organization";

class OrganizationService {
  async requestToSingUp(newOrganization: any) {
    const { phone, name, founderName } = newOrganization;

    const organization = await OrganizationModel.create({
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

    await OrganizationModel.findOneAndUpdate(
      { _id: organizationId },
      { isVerified: true }
    );
  }
}

export default new OrganizationService();
