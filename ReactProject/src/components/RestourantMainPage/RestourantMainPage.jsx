import { useSelector } from "react-redux";
import { RestorauntTabs } from "../RestorauntTabs/RestorauntTabs";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/index.js";
import { RestourantPage } from "../RestorauntPage/RestorauntPage.jsx";
import { useState } from "react";

export const RestorauntMainPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurantsIds[0]);

  return (
    <>
      <RestorauntTabs
        restaurantsIds={restaurantsIds}
        selectedRestaurantId={selectedRestaurantId}
        onTabClick={setSelectedRestaurantId}
      />
      <RestourantPage restaurantId={selectedRestaurantId} />
    </>
  );
};