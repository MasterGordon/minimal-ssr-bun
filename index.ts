import { renderToReadableStream } from "react-dom/server";
import { createElement } from "react";
import Document from "./Document.tsx";

Bun.serve({
  fetch: async (req) => {
    if (req.url.endsWith("/client.js")) {
      const buildRes = await Bun.build({
        minify: true,
        entrypoints: ["./client.ts"],
      });
      return new Response(buildRes.outputs[0]);
    }

    const App = (await import("./App.tsx")).default;
    const stream = await renderToReadableStream(
      createElement(Document, null, createElement(App)),
    );

    return new Response(stream);
  },
  port: 3000,
});

console.log("Listening on port 3000");
