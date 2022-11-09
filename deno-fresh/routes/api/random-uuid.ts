import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_) {
    const uuid = crypto.randomUUID()
    return new Response(JSON.stringify({ uuid }), {
      headers: {
        "content-type": "application/json",
      }
    })
  }
}