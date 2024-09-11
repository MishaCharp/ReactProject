import { RestorauntTab } from "./RestaurantTab/RestaurantTab.jsx";
import styles from "./RestorauntTabs.module.css";

export const RestorauntTabs = ({ restaurantsIds, selectedRestaurantId, onTabClick }) => {
  return (
    <div className={styles.container}>
      {restaurantsIds.map((id) => (
        <RestorauntTab
          key={id}
          isActive={id === selectedRestaurantId}
          id={id}
          onClick={() => onTabClick(id)}
        />
      ))}
    </div>
  );
};
