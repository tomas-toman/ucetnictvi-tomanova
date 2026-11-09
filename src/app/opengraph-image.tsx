import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OWNER_NAME, SITE_URL } from "@/lib/site";

export const alt = `${OWNER_NAME} – účetní služby v Litoměřicích`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  ghostWhite: "#faf7fd",
  lapis: "#26619c",
  teal: "#1f7f74",
  dimGray: "#656176",
  charcoal: "#534d56",
};

const fontsDirectory = join(process.cwd(), "src/assets/fonts");

const [robotoRegular, robotoBold, logo] = await Promise.all([
  readFile(join(fontsDirectory, "roboto-400.ttf")),
  readFile(join(fontsDirectory, "roboto-700.ttf")),
  readFile(join(process.cwd(), "public/images/Logo.svg")),
]);

const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto",
        background: `radial-gradient(ellipse 80% 90% at 85% 10%, #1f7f7414 0%, ${COLORS.ghostWhite} 100%)`,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 88px",
        }}
      >
        <img src={logoSrc} width={300} height={215} alt="Logo" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: COLORS.teal,
            }}
          >
            Účetní služby · Litoměřice
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: COLORS.charcoal,
            }}
          >
            {OWNER_NAME}
          </div>
          <div
            style={{
              marginTop: 20,
              maxWidth: 640,
              fontSize: 30,
              lineHeight: 1.4,
              color: COLORS.dimGray,
            }}
          >
            Účetnictví, daňová evidence, DPH a mzdy pro OSVČ, firmy i neziskové
            organizace.
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "28px 88px",
          fontSize: 26,
          fontWeight: 700,
          color: COLORS.ghostWhite,
          backgroundImage: `linear-gradient(to right, ${COLORS.teal}, ${COLORS.lapis})`,
        }}
      >
        {new URL(SITE_URL).host.replace(/^www\./, "")}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Roboto", data: robotoRegular, weight: 400, style: "normal" },
        { name: "Roboto", data: robotoBold, weight: 700, style: "normal" },
      ],
    },
  );
}
