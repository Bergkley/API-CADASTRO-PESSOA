import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({name, email}: CreateCustomerProps) {
    console.log("rota foi chamada");
    return { ok: true };
  }
}
export { CreateCustomerService };
