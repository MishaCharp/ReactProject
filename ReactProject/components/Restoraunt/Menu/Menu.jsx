import { DishCounter } from "../../Counter/DishCounter/DishCounter";
import styles from "./Menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3 className={styles.card}>Меню:</h3>
      {menu.map(({ id, name, price, ingredients }) => (
        <div key={id} className={styles.details}>
          <details>
            <summary className={styles.name}>
              {name}
            </summary>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </details>
          <p className={styles.price}>{price}$</p>
          <DishCounter />
        </div>
      ))}
    </div>
  );
};
