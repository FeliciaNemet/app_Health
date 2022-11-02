import type { ReactNode } from "react";
import Head from "next/head";
import * as styles from "./Page.css";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props): JSX.Element => (
  <>
    <Head>
      <title>Tint Technical Test</title>
    </Head>
    <main className={styles.page}>{children}</main>
  </>
);

export default Page;
