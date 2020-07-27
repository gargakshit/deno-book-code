import { Application } from "./deps.ts";
import { DinoRouter } from "./routes/index.ts";

const app = new Application();

app.use(DinoRouter.routes());

console.log("Starting on http://localhost:3000");
await app.listen({ port: 3000 });
