// routes/greet/[name].tsx

import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main class="p-4 mx-auto max-w-screen-md">
        <p>Greetings to you, {name}!</p>
      </main>
    </>
  );
}