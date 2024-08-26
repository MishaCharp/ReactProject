import { Footer } from "../Footer/Footer.jsx";
import { Header } from "../Header/Header";
import { ProgressBar } from "../Layout/ProgressBar/ProgressBar.jsx";

export const Layout = ({ children }) => {

  return (
    <div>
      <ProgressBar />
      <Header />
      {children}
      <Footer />  
    </div>
  );
};
