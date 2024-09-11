import { useContext } from "react";
import styles from "./Menu.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import { MenuItem } from "./MenuItem/MenuItem";

export const Menu = ({ menuIds }) => {
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  const themeStyleTitle = isLight ? styles.titleLight : styles.titleDark;

  return (
    <div>
      <h3 className={`${styles.title} ${themeStyleTitle}`}>Меню:</h3>
      {menuIds.map((id) => (
        <MenuItem key={id} menuId={id} />
      ))}
    </div>
  );
};
