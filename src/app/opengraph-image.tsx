import { ImageResponse } from "next/og";

export const alt = "MadTown Racing — student-operated collegiate motorsport in Madison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#080808",
        color: "#f4f2ec",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 30,
          fontWeight: 800,
        }}
      >
        <span style={{ fontStyle: "italic", fontSize: 44 }}>
          M<span style={{ color: "#e21b22" }}>/</span>R
        </span>
        <span style={{ letterSpacing: 6, fontSize: 22, color: "#a6a6a6" }}>MADTOWN RACING</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: -2,
        }}
      >
        <span>MADISON, MEET</span>
        <span style={{ color: "#e21b22" }}>WHEEL-TO-WHEEL.</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 32,
          fontSize: 22,
          letterSpacing: 4,
          color: "#d8d6d0",
        }}
      >
        <span style={{ borderLeft: "4px solid #e21b22", paddingLeft: 16 }}>MADISON, WI</span>
        <span>CRS A-SERIES</span>
        <span>MAZDA MX-5 ND</span>
      </div>
    </div>,
    size,
  );
}
