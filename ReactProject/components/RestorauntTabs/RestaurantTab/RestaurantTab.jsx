import { useContext } from "react";
import styles from "./RestarauntTab.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";

export const RestorauntTab = ({ id, name, isActive, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const themeTabClass = theme === "light" ? styles.tabLight : styles.tabDark;

  const isActiveClassValue = isActive ? styles.tabActive : "";

  return (
    <div className={`${styles.tab} ${themeTabClass} ${isActiveClassValue}`} onClick={onClick}>
      {name}
    </div>
  );
};
