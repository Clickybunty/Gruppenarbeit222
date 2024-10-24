import styles from "./TextField.module.css";

function TextField({ label, placeholder, onChange, value }) {
  return (
    <div className={styles.TextField}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextField;
