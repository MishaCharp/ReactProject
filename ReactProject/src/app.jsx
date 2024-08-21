import { useState } from "react";
import { RestorauntPage } from "../components/RestorauntPage/RestorauntPage";
import { RestorauntTabs } from "../components/RestorauntTabs/RestorauntTabs";
import { Layout } from "../components/Layout/Layout";
import { restaurants } from "../materials/mock.js";
import { RestorauntList } from "../components/RestorauntList/RestorauntList.jsx";

export const App = () => {
  const allRestaurantTab = { id: "all", name: "Все рестораны" };
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    allRestaurantTab.id
  );

  // Добавляем таб "Все рестораны" в начало массива
  const tabs = [allRestaurantTab, ...restaurants];

  return (
    <Layout>
      <RestorauntTabs
        tabs={tabs}
        selectedRestaurantId={selectedRestaurantId}
        onTabClick={setSelectedRestaurantId}
      />
      {selectedRestaurantId !== allRestaurantTab.id ? (
        <RestorauntPage
          restaurantId={selectedRestaurantId}
        />
      ) : (
        <RestorauntList />
      )}
    </Layout>
  );
};
