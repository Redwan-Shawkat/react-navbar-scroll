import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Body from "./Body";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    const bodySection = document.getElementById("body");

    if (window.scrollY < bodySection.offsetTop) {
      setActiveSection("home");
    } else if (window.scrollY >= bodySection.offsetTop) {
      setActiveSection("body");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <div id="home">
        <Home />
      </div>
      <div id="body">
        <Body />
      </div>
    </div>
  );
};

export default App;
