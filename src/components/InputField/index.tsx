import styles from "./inputfield.module.css";

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input {...props} className={styles.input} />;
};

export default InputField;
