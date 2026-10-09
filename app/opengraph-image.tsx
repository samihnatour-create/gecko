import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gecko Media — Better creative. Smarter ads.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "gecko-logo.png"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex",
          flexDirection: "column", justifyContent: "space-between",
          background: "#d0ff43", color: "#171a17", padding: "64px 72px",
        }}
      >
        {/* ImageResponse requires a plain img with embedded image data. */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={235} height={95} alt="Gecko Media" style={{ objectFit: "contain", objectPosition: "left" }} />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05 }}>
          <span>Better creative.</span>
          <span>Smarter ads.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}>
          <span>Ad creative · Media buying · Branding</span>
          <span>geckomedia.net</span>
        </div>
      </div>
    ),
    size,
  );
}
