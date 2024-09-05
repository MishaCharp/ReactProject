import { RestorauntTitle } from "../Restoraunt/RestorauntTitle/RestorauntTitle";
import { Menu } from "./Menu/Menu.jsx";
import { ReviewsPage } from "../Reviews/ReviewsPage/ReviewsPage.jsx";

import styles from "./Restoraunt.module.css";

export const Restoraunt = ({ id, name, menu, reviews }) => {
  return (
    <div className={styles.card}>
      <RestorauntTitle title={name} />
      <Menu menu={menu} />
      <ReviewsPage reviews={reviews} />
    </div>
  );
};
