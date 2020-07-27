import { Router, helpers } from "../deps.ts";

const router = new Router({
  prefix: "/dino",
});

router.get("/hello", (ctx) => {
  ctx.response.body = "Mr. Dino says Hello!";
});

router.get("/", (ctx) => {
  const query = helpers.getQuery(ctx);

  ctx.response.body = `Hello, I am ${query.name}. I am ${query.age} years old.`;
});

router.get("/:dino", (ctx) => {
  ctx.response.body = `Mr. ${ctx.params.dino} says Hello!`;
});

router.post("/new", async (ctx) => {
  const data = await ctx.request.body({
    type: "json",
  }).value;

  ctx.response.body = `A dino with name ${data.name} created`;
});

export default router;
