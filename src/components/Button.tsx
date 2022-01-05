import styles from "./Button.module.css";

const Button: React.FC<{ googleButton: boolean; nome: string }> = (props) => {
  return (
    <div>
      <button
        className={`${styles.button} ${
          props.googleButton ? styles.googleButton : styles.loginButton
        }`}
      >
        {props.googleButton && (
          <img className={styles.googleIcon} src={require("../assets/image/google_logo.png")} alt="logot" />
        )}
        {props.nome}
      </button>
    </div>
  );
};

export default Button;
