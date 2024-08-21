import { restaurants } from "../../materials/mock.js";
import { RestorauntTab } from "./RestaurantTab/RestaurantTab.jsx";
import "../../styles/restorauntsTab.css";

export const RestorauntTabs = ({selectedRestaurantId, onTabClick}) => {
  // Добавляем таб "Все рестораны" в начало массива
  const allRestaurantsTab = { id: "all", name: "Все рестораны" };
  const extendedRestaurants = [allRestaurantsTab, ...restaurants];

  return (
    <div className="tabs-container">
      {extendedRestaurants.map(({ id, name }) => (
        <RestorauntTab isActive={id === selectedRestaurantId} id={id} name={name} onClick={() => onTabClick(id)}/>
      ))}
    </div>
  );
};
