import React from "react";

const App = () => {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#333",
          padding: "1rem",
          position: "fixed",
          width: "100%",
        }}
      >
        <a
          href="#home"
          style={{ color: "white", marginRight: "1rem" }}
          onClick={(e) => handleScrollToSection(e, "home")}
        >
          Home
        </a>
        <a
          href="#body"
          style={{ color: "white" }}
          onClick={(e) => handleScrollToSection(e, "body")}
        >
          Body
        </a>
      </nav>

      <div
        id="home"
        style={{ height: "100vh", width: "100vw", backgroundColor: "red" }}
      >
        Home Section
      </div>

      <div
        id="body"
        style={{ height: "100vh", width: "100vw", backgroundColor: "blue" }}
      >
        Body Section
      </div>
    </div>
  );
};

export default App;
