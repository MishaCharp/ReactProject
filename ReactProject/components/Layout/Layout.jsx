import { Footer } from "../Footer/Footer.jsx";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
