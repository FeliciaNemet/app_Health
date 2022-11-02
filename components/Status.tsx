import * as styles from "./Status.css";

interface Props {
  status: "DRAFT" | "RECEIVED" | "APPROVED" | "ISSUED" | "REJECTED";
}

const Status = ({ status }: Props) => (
  <div className={styles.chip[status]}>{status}</div>
);

export default Status;
