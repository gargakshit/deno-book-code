import { Application } from "../deps.ts";
import { mathRouter } from "./routes/index.ts";

const app = new Application();

app.use(mathRouter.routes());

console.log("Listening on :3000");
await app.listen({ port: 3000 });
