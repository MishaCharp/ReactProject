import { restaurants } from "../../materials/mock.js";
import { Restoraunt } from "../Restoraunt/Restoraunt";

export const RestorauntPage = ({ restaurantId }) => {
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (!selectedRestaurant) {
    return <div>Please select a restaurant</div>;
  }

  return (
    <Restoraunt
      id={selectedRestaurant.id}
      name={selectedRestaurant.name}
      menu={selectedRestaurant.menu}
      reviews={selectedRestaurant.reviews}
    />
  );
};
