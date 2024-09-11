import { RestorauntTitle } from "../Restoraunt/RestorauntTitle/RestorauntTitle";
import { Menu } from "./Menu/Menu.jsx";
import { ReviewsPage } from "../Reviews/ReviewsPage/ReviewsPage.jsx";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider.jsx";

import styles from "./Restoraunt.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/index.js";

export const Restoraunt = ({ restorauntId }) => {
  const { theme } = useContext(ThemeContext);

  const restourant = useSelector((state) =>
    selectRestaurantById(state, restorauntId)
  );

  const themeStyle = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={`${styles.card} ${themeStyle}`}>
      <RestorauntTitle title={restourant.name} />
      <Menu menuIds={restourant.menu} />
      <ReviewsPage reviewsIds={restourant.reviews} />
    </div>
  );
};
