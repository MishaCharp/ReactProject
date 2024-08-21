import { restaurants } from "../../materials/mock.js";
import { Restoraunt } from "../Restoraunt/Restoraunt";

export const RestorauntList = () => {
    return restaurants.map(({ id, name, menu, reviews }) => (
      <Restoraunt id={id} name={name} menu={menu} reviews={reviews} />
    ));
};
