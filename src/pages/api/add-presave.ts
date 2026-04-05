import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const newItem = `{
    title: "${body.title}",
    artist: "${body.artist}",
    image: "${body.image}",
    url: "${body.url}",
    source: "${body.source}",
  }`;

  // ⚠️ aquí vas a editar el archivo en GitHub
  const res = await fetch(`https://api.github.com/repos/TU_USER/TU_REPO/contents/src/data/presaves.ts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
  });

  const file = await res.json();
  const content = Buffer.from(file.content, "base64").toString("utf-8");

  const updated = content.replace(
    "];",
    `  ${newItem},\n];`
  );

  const encoded = Buffer.from(updated).toString("base64");

  await fetch(`https://api.github.com/repos/TU_USER/TU_REPO/contents/src/data/presaves.ts`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "add presave",
      content: encoded,
      sha: file.sha,
    }),
  });

  return new Response(JSON.stringify({ success: true }));
};