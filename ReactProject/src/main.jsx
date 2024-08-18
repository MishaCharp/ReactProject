import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const data = restaurants;

const firstRestaurantData = data[0];
const secondRestaurantData = data[1];
const thirdRestaurantData = data[2];
const fourRestaurantData = data[3];

const firstRestaurantElement = createElementByTemplate(firstRestaurantData);
const secondRestaurantElement = createElementByTemplate(secondRestaurantData);
const thirdRestaurantElement = createElementByTemplate(thirdRestaurantData);
const fourRestaurantElement = createElementByTemplate(fourRestaurantData);

const allItemsDiv = createElement(
  "div",
  {},
  firstRestaurantElement,
  secondRestaurantElement,
  thirdRestaurantElement,
  fourRestaurantElement
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(allItemsDiv);

function createElementByTemplate(restaurantData) {
  const styles = { border: "1px solid black", margin: "10px", padding: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"};

  return createElement(
    "div",
    { style: styles },
    createElement("p", {}, restaurantData.name),
    createElement("h3", {}, "Меню"),
    createElement(
      "ul",
      {},
      restaurantData.menu.map((item) => createElement("li", {}, item.name))
    ),
    createElement("h3", {}, "Отзывы"),
    createElement(
      "ul",
      {},
      restaurantData.reviews.map((review) =>
        createElement("li", {}, review.text)
      )
    )
  );
}
