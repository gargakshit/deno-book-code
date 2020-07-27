import { createRemote } from "./deps.ts";

const remote = createRemote("http://localhost:9876");
console.log(await remote.add(10, 2));
