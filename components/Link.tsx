import NextLink from "next/link";
import * as styles from "./Link.css";

interface Props {
  to: string;
  children: string;
}

const Link = ({ to, children }: Props) => (
  <NextLink href={to}>
    <a className={styles.link}>{children}</a>
  </NextLink>
);

export default Link;
