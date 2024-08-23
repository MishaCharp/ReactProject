import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer.jsx";
import { Header } from "../Header/Header";
import { ProgressBar } from "../Layout/ProgressBar/ProgressBar.jsx";

export const Layout = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ProgressBar progress={scrollProgress} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
