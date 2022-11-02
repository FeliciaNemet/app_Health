import * as styles from "./Input.css";

interface Props {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
}

const TextInput = ({ label, value, onChange }: Props) => (
  <label className={styles.label}>
    {label}
    <input
      className={styles.input}
      type="text"
      value={value || ""}
      onChange={(event) => onChange(event.target.value || null)}
    />
  </label>
);

export default TextInput;
