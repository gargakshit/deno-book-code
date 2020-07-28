import { Context } from "../deps.ts";
import { NextFunction } from "../types.ts";

export async function loggerMiddleware(ctx: Context, next: NextFunction) {
  await next();
  console.log(
    `[${ctx.request.method}] ${ctx.response.status} ${ctx.request.url}`
  );
}
