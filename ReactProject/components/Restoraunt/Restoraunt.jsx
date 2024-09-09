import { RestorauntTitle } from "../Restoraunt/RestorauntTitle/RestorauntTitle";
import { Menu } from "./Menu/Menu.jsx";
import { ReviewsPage } from "../Reviews/ReviewsPage/ReviewsPage.jsx";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider.jsx";

import styles from "./Restoraunt.module.css";

export const Restoraunt = ({ id, name, menu, reviews }) => {
  const { theme } = useContext(ThemeContext);

  const themeStyle = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={`${styles.card} ${themeStyle}`}>
      <RestorauntTitle title={name} />
      <Menu menu={menu} />
      <ReviewsPage reviews={reviews} />
    </div>
  );
};
