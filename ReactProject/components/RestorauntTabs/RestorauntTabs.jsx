import { RestorauntTab } from "./RestaurantTab/RestaurantTab.jsx";
import styles from "./RestorauntTabs.module.css";

export const RestorauntTabs = ({ tabs, selectedRestaurantId, onTabClick }) => {
  return (
    <div className={styles.tabsContainer}>
      {tabs.map(({ id, name }) => (
        <RestorauntTab
          key={id}
          isActive={id === selectedRestaurantId}
          id={id}
          name={name}
          onClick={() => onTabClick(id)}
        />
      ))}
    </div>
  );
};
