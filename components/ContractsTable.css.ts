import { style } from "@vanilla-extract/css";

export const table = style({
  borderRadius: "8px",
  border: "1px solid #E4E7EC",
  boxShadow:
    "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
  overflow: "hidden",
  borderSpacing: 0,
  width: "100%",
});

export const header = style({
  background: "#F9FAFC",
  color: "#00123399",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "left",
  padding: "12px 24px",
});

export const cell = style({
  color: "#4C5A76",
  padding: "26px 24px",
});
