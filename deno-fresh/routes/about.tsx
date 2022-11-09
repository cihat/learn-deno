import { PageProps, Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render()
    resp.headers.set("X-Custom-Header", "Hello")
    return resp
  }
}

export default function About(props: PageProps) {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1>
          This is about page
        </h1>
      </div>
    </>
  );
}
