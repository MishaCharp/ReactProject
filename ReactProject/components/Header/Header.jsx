import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider.jsx";
import { UserContext } from "../UserProvider/UserProvider.jsx";

import styles from "./Header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);

  const themeBtnClass = theme === "light" ? styles.themeBtnLight : styles.themeBtnDark;
  const themeHeaderClass = theme === "light" ? styles.themeHeaderLight : styles.themeHeaderDark;

  return (
    <header className={`${styles.header} ${themeHeaderClass}`}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Header</p>
      </div>
      <button onClick={toggleTheme} className={`${styles.themeBtn} ${themeBtnClass}`}>
        {theme === "light" ? "Light Theme" : "Dark Theme"}
      </button>
      {user ? (
        <div>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
};