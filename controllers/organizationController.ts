import organizationService from "../services/organizationService";
import Express from "express";

class OrganizationController {
  async requestToSingUp(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    await organizationService.requestToSingUp(request.body);

    response.status(200);
  }

  async verifyOrganization(
    request: Express.Request,
    response: Express.Response,
    next: any
  ) {
    const { organizationId } = request.body;

    await organizationService.verifyOrganization(organizationId);

    response.status(200);
  }
}

export default new OrganizationController();
