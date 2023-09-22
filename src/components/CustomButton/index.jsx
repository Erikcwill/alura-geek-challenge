import styles from "./CustomButton.module.css";

export default function CustomButton({ children, width, isLogin = false }) {
  const buttonSize = {
    width: width || '', // Largura personalizada (ou vazio para usar o padrão)
  };

  // Adicione a classe "loginButton" condicionalmente com base no valor de isLogin
  const buttonClasses = `${styles.customButton} ${isLogin ? styles.loginButton : ''}`;

  return (
    <button className={buttonClasses} style={buttonSize}>
      {children}
    </button>
  );
}