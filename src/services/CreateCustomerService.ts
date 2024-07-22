import prismaClient from "../prisma";

class CreateCustomerService {
  async execute() {
    console.log("rota foi chamada");
    return { ok: true };
  }
}
export { CreateCustomerService };
