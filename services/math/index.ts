import { serve, respondRpc } from "../../deps.ts";
import { add } from "./add.ts";
import { subtract } from "./subtract.ts";

const server = serve({ port: 9876 });

const service = {
  add,
  subtract,
};

console.log("RPC server starting at :9876");

for await (const req of server) {
  await respondRpc(req, service);
}
