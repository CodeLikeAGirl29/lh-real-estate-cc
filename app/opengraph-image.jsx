import { ImageResponse } from "next/og";

// Default social share card for any page that doesn't set its own image
// (home, about, blog index). Blog posts and projects use their hero photo.
export const alt =
  "Lindsey Howard, eXp Realty — Fort Walton Beach & Okaloosa County real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#101113",
          color: "#ECE9E4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#9a722d",
            textTransform: "uppercase",
          }}
        >
          L. Howard // RE + Dev
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            Real numbers.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#4a7fb3",
            }}
          >
            Clear coast.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#8A8D93" }}>
            BAH, flood zones, and true monthly cost for Emerald Coast buyers
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#8A8D93",
            borderTop: "2px solid #2a2d31",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>Lindsey Howard · eXp Realty</div>
          <div style={{ display: "flex" }}>Fort Walton Beach · Okaloosa County, FL</div>
        </div>
      </div>
    ),
    size
  );
}
