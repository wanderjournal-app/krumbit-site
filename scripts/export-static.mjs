import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const clientDir = new URL("../dist/client/", import.meta.url);
const outputDir = new URL("../dist/static/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = { waitUntil() {}, passThroughOnException() {} };

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const routes = [
  ["/", "index.html"],
  ["/privacy", "privacy/index.html"],
  ["/support", "support/index.html"],
];

for (const [pathname, output] of routes) {
  const response = await worker.fetch(
    new Request(`https://krumbit-app.easynet.world${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );
  if (!response.ok) {
    throw new Error(`Static export failed for ${pathname}: ${response.status}`);
  }
  const destination = new URL(`../dist/static/${output}`, import.meta.url);
  await mkdir(new URL("./", destination), { recursive: true });
  await writeFile(destination, await response.text());
}

await writeFile(new URL("../dist/static/.nojekyll", import.meta.url), "");
await writeFile(
  new URL("../dist/static/CNAME", import.meta.url),
  "krumbit-app.easynet.world\n",
);

console.log(`Exported ${routes.length} routes to dist/static`);
