import { createRemote } from "./deps.ts";

const remote = createRemote("http://localhost:9876");
console.log("Adding 10 and 2 gives", await remote.add(10, 2));
console.log("Subtracting 10 from 2 gives", await remote.subtract(10, 2));
