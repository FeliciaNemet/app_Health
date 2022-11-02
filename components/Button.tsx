import * as styles from "./Button.css";

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: Props) => (
  <button
    className={styles.button}
    type={onClick ? "button" : "submit"}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
