import { style } from "@vanilla-extract/css";

export const label = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "#4C5A76",
  width: "100%",
});

export const input = style({
  color: "#4C5A76",
  border: "1px solid #DFE5F2",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "16px",
  lineHeight: "22px",
  appearance: "textfield",
  selectors: {
    "&::-webkit-inner-spin-button": {
      appearance: "none",
    },
  },
});
