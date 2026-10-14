import { ImageResponse } from "next/og";

// Default social share card for any page that doesn't set its own image
// (home, about, blog index). Blog posts and projects use their hero photo.
export const alt =
  "Lindsey Howard, eXp Realty: Fort Walton Beach and Okaloosa County real estate";
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
          background: "#F5F7F4",
          color: "#12312E",
          fontFamily: "serif",
          borderBottom: "24px solid #0B6A5E",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
          Lindsey Howard
          <span style={{ marginLeft: 16, color: "#566965", fontFamily: "sans-serif", fontSize: 26, alignSelf: "center" }}>
            eXp Realty
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 600, lineHeight: 1.08, maxWidth: 980 }}>
            Know the real monthly cost before you fall for the house.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#566965", fontFamily: "sans-serif" }}>
            Fort Walton Beach, Niceville, Crestview and Destin
          </div>
        </div>
      </div>
    ),
    size
  );
}
