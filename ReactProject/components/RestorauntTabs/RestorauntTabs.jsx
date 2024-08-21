import { restaurants } from "../../materials/mock.js";
import { RestorauntTab } from "./RestaurantTab/RestaurantTab.jsx";
import "../../styles/restorauntsTab.css";

export const RestorauntTabs = ({ tabs, selectedRestaurantId, onTabClick }) => {
  return (
    <div className="tabs-container">
      {tabs.map(({ id, name }) => (
        <RestorauntTab
          isActive={id === selectedRestaurantId}
          id={id}
          name={name}
          onClick={() => onTabClick(id)}
        />
      ))}
    </div>
  );
};
