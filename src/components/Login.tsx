import Button from "./Button";
import styles from "./Login.module.css";
import TextInput from "./TextInput";

const Login: React.FC = () => {
  return (
    <div className={styles.welcomeStyle}>
      <h3>Bem vindo de volta</h3>
      <h1>Faça login na sua conta</h1>
      <div className={styles.inputContainer}>
        <TextInput
          id="email"
          nome="E-mail"
          oculto={false}
          placeholder="Insira seu Email..."
        />
        <TextInput
          id="senha"
          nome="Senha"
          oculto={true}
          placeholder="Insira sua Senha..."
        />
      </div>
      <div className={styles.flexContainer}>
        <div>
          <input  type="checkbox" id="lembraSenha" />
          <label htmlFor="lembraSenha">Lembre de mim</label>
        </div>
        <div>
          <p>Esqueceu sua senha?</p>
        </div>
      </div>
      <Button googleButton={false} nome="Entrar" />
      <Button googleButton={true} nome="Ou Faça login com o Google" />
      <div className={styles.spanContainer}>
        <span>Não tem uma conta?</span>
        <span className={styles.linkSpan}> Cadastre-se</span>
      </div>
    </div>
  );
};

export default Login;
