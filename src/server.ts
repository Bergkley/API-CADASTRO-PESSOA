import Fastify from "fastify";
import { routes } from "./router";

const app = Fastify({logger: true});

const start = async () => {
    try{
        await app.listen({port:3333,});
    }catch(error){
        process.exit(1);
    }
}

start();