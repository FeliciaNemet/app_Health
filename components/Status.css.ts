import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  display: "inline",
  width: "fit-content",
  fontSize: "12px",
  lineHeight: "12px",
  padding: "4px 8px",
  fontWeight: 500,
  alignItems: "center",
  border: "1px solid",
  borderRadius: "6px",
});

export const chip = styleVariants({
  DRAFT: [
    base,
    {
      color: "#7E8AA4",
      backgroundColor: "#EFF1F7",
      borderColor: "#DFE5F2",
    },
  ],
  RECEIVED: [
    base,
    {
      color: "#7E8AA4",
      backgroundColor: "#EFF1F7",
      borderColor: "#DFE5F2",
    },
  ],
  APPROVED: [
    base,
    {
      color: "#22A743",
      backgroundColor: "#E1FAE7",
      borderColor: "#AEF1BF",
    },
  ],
  ISSUED: [
    base,
    {
      color: "#22A743",
      backgroundColor: "#E1FAE7",
      borderColor: "#AEF1BF",
    },
  ],
  REJECTED: [
    base,
    {
      color: "#C5382E",
      backgroundColor: "#FFE9E8",
      borderColor: "#F8CBC7",
    },
  ],
});
