import { Router } from "../deps.ts";

const router = new Router({
  prefix: "/dino",
});

router.get("/hello", (ctx) => {
  ctx.response.body = "Mr. Dino says Hello!";
});

export default router;
