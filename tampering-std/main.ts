import { serve } from "https://deno.land/std/http/server.ts";
// import Deno from "https://deno.land/std/node/deno.ts";

const port = 8080;
const portNumber = Deno.env.get("PORT");

console.log(Deno);

const handler: (request: Request) => Response = (
  request: Request,
): Response => {
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }
  ${portNumber}
  `;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running.Access it at: http://localhost:8080/`);
await serve(handler, { port });

export function add(a: number, b: number): number {
  return a + b;
}
