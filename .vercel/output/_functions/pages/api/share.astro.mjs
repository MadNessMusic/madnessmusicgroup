import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'fs/promises';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") ?? "New Release";
  const artist = url.searchParams.get("artist") ?? "";
  const cover = url.searchParams.get("cover") ?? "";
  const fontData = await readFile(
    new URL("../../assets/fonts/Inter.ttf", import.meta.url)
  );
  let coverBase64 = "";
  if (cover) {
    const img = await fetch(cover);
    const buffer = await img.arrayBuffer();
    coverBase64 = "data:image/jpeg;base64," + Buffer.from(buffer).toString("base64");
  }
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          width: 1080,
          height: 1920,
          color: "white",
          fontFamily: "Inter"
        },
        children: [
          coverBase64 && {
            type: "img",
            props: {
              src: coverBase64,
              width: 600,
              height: 600
            }
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 72,
                fontWeight: 700,
                marginTop: 40
              },
              children: title
            }
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 40,
                opacity: 0.8,
                marginTop: 10
              },
              children: artist
            }
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 28,
                opacity: 0.6,
                marginTop: 40
              },
              children: "MadNess Editorial"
            }
          }
        ].filter(Boolean)
      }
    },
    {
      width: 1080,
      height: 1920,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 700,
          style: "normal"
        }
      ]
    }
  );
  const resvg = new Resvg(svg);
  const png = resvg.render();
  return new Response(new Uint8Array(png.asPng()), {
    headers: {
      "Content-Type": "image/png"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
