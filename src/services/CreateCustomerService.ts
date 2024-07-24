import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute() {
    console.log("rota foi chamada");
    return { ok: true };
  }
}
export { CreateCustomerService };
