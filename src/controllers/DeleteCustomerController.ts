import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const deleteCustomer = new DeleteCustomerService();

        const { id } = request.query as { id: string };

        const customer = await deleteCustomer.execute({ id });

        reply.send(customer);
    }
}