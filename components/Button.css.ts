import { style } from "@vanilla-extract/css";

export const button = style({
  width: "fit-content",
  height: "fit-content",
  color: "#4C5A76",
  padding: "8px 16px",
  background: "#FFFFFF",
  border: "1px solid rgba(13, 84, 209, 0.1)",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all .2s",
  ":hover": {
    background: "#ECF3FF",
    border: "1px solid rgba(13, 84, 209, 0.4)",
  },
});
