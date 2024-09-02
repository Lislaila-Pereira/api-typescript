import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    //rota teste
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    })

    //cadastrar cliente
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    //listar clientes
    fastify.get("/getcustomers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    })

}