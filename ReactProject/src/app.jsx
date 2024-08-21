import { useState } from "react";
import { RestorauntPage } from "../components/RestorauntPage/RestorauntPage";
import { RestorauntTabs } from "../components/RestorauntTabs/RestorauntTabs";
import { Layout } from "../components/Layout/Layout";

export const App = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("all");

  return (
    <>
      <Layout>
        <RestorauntTabs
          selectedRestaurantId={selectedRestaurantId}
          onTabClick={setSelectedRestaurantId}
        />
        <RestorauntPage restaurantId={selectedRestaurantId} />
      </Layout>
    </>
  );
};
