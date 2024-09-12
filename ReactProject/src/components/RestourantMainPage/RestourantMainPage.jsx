import { useSelector } from "react-redux";
import { RestorauntTabs } from "../RestorauntTabs/RestorauntTabs";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/index.js";
import { useState } from "react";
import { Restoraunt } from "../Restoraunt/Restoraunt.jsx";

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
      <Restoraunt restorauntId={selectedRestaurantId} />
    </>
  );
};