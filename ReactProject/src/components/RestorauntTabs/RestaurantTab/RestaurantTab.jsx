import { useContext } from "react";
import styles from "./RestarauntTab.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants";

export const RestorauntTab = ({ id, isActive, onClick }) => {
  const { theme } = useContext(ThemeContext);

  const restourant = useSelector((state) => selectRestaurantById(state, id));

  const themeTabClass = theme === "light" ? styles.tabLight : styles.tabDark;

  const isActiveClassValue = isActive ? styles.tabActive : "";

  return (
    <div className={`${styles.tab} ${themeTabClass} ${isActiveClassValue}`} onClick={onClick}>
      {restourant.name}
    </div>
  );
};
