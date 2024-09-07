import { useContext } from "react";
import { DishCounter } from "../../Counter/DishCounter/DishCounter";
import styles from "./Menu.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import { UserContext } from "../../UserProvider/UserProvider";

export const Menu = ({ menu }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const isLight = theme === "light";

  const themeStyleTitle = isLight ? styles.titleLight : styles.titleDark;
  const themeStyleDetails = isLight ? styles.detailsLight : styles.detailsDark;
  const themeStylePrice = isLight ? styles.priceLight : styles.priceDark;

  return (
    <div>
      <h3 className={`${styles.title} ${themeStyleTitle}`}>Меню:</h3>
      {menu.map(({ id, name, price, ingredients }) => (
        <div key={id} className={`${styles.details} ${themeStyleDetails}`}>
          <details>
            <summary className={styles.name}>{name}</summary>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </details>
          <p className={`${styles.price} ${themeStylePrice}`}>{price}$</p>
          {user && <DishCounter />}
        </div>
      ))}
    </div>
  );
};
