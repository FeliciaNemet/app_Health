import { style } from "@vanilla-extract/css";

export const topbar = style({
  display: "flex",
  justifyContent: "space-between",
});

export const card = style({
  borderRadius: "8px",
  border: "1px solid #E4E7EC",
  boxShadow:
    "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
  overflow: "hidden",
  padding: "16px",

  display: "flex",
  justifyContent: "space-between",
});

export const detail = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
});
