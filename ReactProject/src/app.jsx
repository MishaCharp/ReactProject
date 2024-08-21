import { useState } from 'react';
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { RestorauntPage } from "../components/RestorauntPage/RestorauntPage";
import { RestorauntTabs } from "../components/RestorauntTabs/RestorauntTabs";

export const App = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("all");

  return (
    <>
      <Header />
      <RestorauntTabs selectedRestaurantId={selectedRestaurantId} onTabClick={setSelectedRestaurantId}/>
      <RestorauntPage restaurantId={selectedRestaurantId}/>
      <Footer />
    </>
  );
};
