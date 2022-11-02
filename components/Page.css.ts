import { style, fontFace, globalStyle } from "@vanilla-extract/css";

const font = fontFace({
  src: "url(/Inter.ttf)",
});

export const page = style({
  maxWidth: "1100px",
  margin: "2rem auto",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
});

globalStyle("*", {
  fontFamily: font,
});

globalStyle("h1, h2", {
  margin: 0,
});

globalStyle("strong", {
  fontWeight: 600,
});
