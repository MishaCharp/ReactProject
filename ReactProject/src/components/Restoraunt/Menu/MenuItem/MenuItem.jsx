import { useContext } from "react";
import styles from "../Menu.module.css";
import { ThemeContext } from "../../../ThemeProvider/ThemeProvider";
import { UserContext } from "../../../UserProvider/UserProvider";
import { DishCounter } from "../../../Counter/DishCounter/DishCounter.jsx";
import { selectDishById } from "../../../../redux/entities/dishes/index.js";
import { useSelector } from "react-redux";

export const MenuItem = ({ menuId }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const isLight = theme === "light";

  const themeStyleDetails = isLight ? styles.detailsLight : styles.detailsDark;
  const themeStylePrice = isLight ? styles.priceLight : styles.priceDark;

  const dish = useSelector((state) => selectDishById(state, menuId));

  return (
    <div className={`${styles.details} ${themeStyleDetails}`}>
      <details>
        <summary className={styles.name}>{dish.name}</summary>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </details>
      <p className={`${styles.price} ${themeStylePrice}`}>{dish.price}$</p>
      {user && <DishCounter />}
    </div>
  );
};
