import { ImageResponse } from "next/og";

export const alt =
  "Empowered Wellness with Inna — functional nutrition and gut health";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #123f31 0%, #287a48 64%, #41ab5d 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          Empowered Wellness with Inna
        </div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 1.08,
            maxWidth: 1000,
          }}
        >
          Root-Cause Nutrition for Gut Health and Wellbeing
        </div>
        <div style={{ color: "#d9f4df", fontSize: 32, marginTop: 34 }}>
          Functional testing · Personalized nutrition · Women’s health
        </div>
      </div>
    ),
    size,
  );
}
