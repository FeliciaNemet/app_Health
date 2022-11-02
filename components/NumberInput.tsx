import * as styles from "./Input.css";

interface Props {
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
}

const NumberInput = ({ label, value, onChange }: Props) => (
  <label className={styles.label}>
    {label}
    <input
      className={styles.input}
      type="number"
      value={value !== null ? value : ""}
      onChange={(event) =>
        onChange(event.target.value ? parseFloat(event.target.value) : null)
      }
    />
  </label>
);

export default NumberInput;
