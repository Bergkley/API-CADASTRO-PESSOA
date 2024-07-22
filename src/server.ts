import Fastify from "fastify";
import { routes } from "./router";
import cors from "@fastify/cors";

const app = Fastify({logger: true});

const start = async () => {
    await app.register(routes);
    await app.register(cors);
    try{
        await app.listen({port:3333,});
    }catch(error){
        process.exit(1);
    }
}

start();