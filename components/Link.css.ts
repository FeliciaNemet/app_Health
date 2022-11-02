import { style } from "@vanilla-extract/css";

export const link = style({
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "0.875rem",
  color: "#0050B2",
  ":hover": {
    color: "#073D7E",
  },
});
