import { style } from "@vanilla-extract/css";

export const form = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  alignItems: "end",
  justifyItems: "end",
});
