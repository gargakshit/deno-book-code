import { Router } from "../../deps.ts";
import { remote } from "../consumer.ts";

const router = new Router({
  prefix: "/math",
});

router.get("/add/:a/:b", async (ctx) => {
  const result = await remote.add(Number(ctx.params.a), Number(ctx.params.b));

  ctx.response.body = result;
});

router.get("/subtract/:a/:b", async (ctx) => {
  const result = await remote.subtract(
    Number(ctx.params.a),
    Number(ctx.params.b)
  );

  ctx.response.body = result;
});

export default router;
