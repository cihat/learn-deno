import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1>
          Hello {props.params.name}
        </h1>
      </div>
    </>
  );
}
