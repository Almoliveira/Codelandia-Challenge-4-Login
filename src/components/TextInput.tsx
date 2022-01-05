import styles from "./TextInput.module.css";
const TextInput: React.FC<{
  id: string;
  nome: string;
  placeholder: string;
  oculto: boolean;
}> = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.labelStyle} htmlFor={props.id}>
        {props.nome}
      </label>
      <input
        className={styles.inputStyle}
        id={props.id}
        type={props.oculto ? "password" : "text"}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
