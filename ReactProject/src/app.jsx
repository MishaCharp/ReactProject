import { useState } from "react";
import { RestorauntPage } from "../components/RestorauntPage/RestorauntPage";
import { RestorauntTabs } from "../components/RestorauntTabs/RestorauntTabs";
import { Layout } from "../components/Layout/Layout";
import { restaurants } from "../materials/mock.js";

export const App = () => {
  const allRestaurantTab = { id: "all", name: "Все рестораны" };
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(allRestaurantTab.id);

  // Добавляем таб "Все рестораны" в начало массива
  const tabs = [allRestaurantTab, ...restaurants];

  return (
    <Layout>
      <RestorauntTabs
        tabs={tabs}
        selectedRestaurantId={selectedRestaurantId}
        onTabClick={setSelectedRestaurantId}
      />
      <RestorauntPage allRestaurantTab={allRestaurantTab} restaurantId={selectedRestaurantId} />
    </Layout>
  );
};
