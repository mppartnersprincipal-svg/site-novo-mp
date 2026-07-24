import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "M|P Assessoria — Marketing e Vendas com Método";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A1A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "2px solid rgba(255, 196, 55, 0.25)",
            borderRadius: 24,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 170,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#FFC437" }}>M</span>
          <span style={{ color: "#FFC437", margin: "0 10px" }}>|</span>
          <span style={{ color: "#FFFFFF" }}>P</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            letterSpacing: 22,
            color: "#FFFFFF",
            opacity: 0.9,
            marginTop: 12,
            marginLeft: 22,
          }}
        >
          ASSESSORIA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#A3A3A3",
            marginTop: 44,
          }}
        >
          Marketing e Vendas com Método · Goiânia-GO
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 64,
            fontSize: 24,
            color: "#FFC437",
            fontWeight: 700,
          }}
        >
          mppartners.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
