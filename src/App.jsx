import "./App.css";

import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Body from "./components/Body";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollingSection, setScrollingSection] = useState("home");

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    const bodySection = document.getElementById("body");

    if (window.scrollY < bodySection.offsetTop) {
      setActiveSection("home");
    } else if (window.scrollY > bodySection.offsetTop) {
      setActiveSection("body");
    }
  };

  const handleScrollSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      setScrollingSection(sectionId);
      setActiveSection(sectionId);
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <Nav
        activeSection={activeSection}
        scrollingSection={scrollingSection}
        handleScrollSection={handleScrollSection}
      />
      <Home />
      <Body />
    </div>
  );
}

export default App;
