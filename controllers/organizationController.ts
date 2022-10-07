import organizationService from "../services/organizationService";
import Express from "express";

class OrganizationController {
  async getOrganizationByTelegramId(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const { telegramId } = request.params;

    const organization = await organizationService.getOrganizationByTelegramId(
      String(telegramId)
    );

    if (!organization) {
      return response.status(404).json(null);
    }

    return response.json(organization);
  }

  async requestToSingUp(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const organization = await organizationService.requestToSingUp(
      request.body
    );

    return response.json(organization);
  }

  async verifyOrganization(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const { organizationId } = request.body;

    const organization = await organizationService.verifyOrganization(
      organizationId
    );

    return response.json(organization);
  }
}

export default new OrganizationController();
