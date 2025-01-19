import HomeNav from "./components/HomeNav";
import BodyNav from "./components/BodyNav";
import Home from "./components/Home";
import Body from "./components/Body";

const App = () => {
  const handleScrollSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navStyle = {
    backgroundColor: "#333",
    width: "100%",
    padding: "1rem",
    position: "fixed",
    display: "flex",
    gap: "1rem",
  };

  return (
    <div>
      <nav style={navStyle}>
        <HomeNav handleScrollSection={handleScrollSection} />
        <BodyNav handleScrollSection={handleScrollSection} />
      </nav>
      <Home />
      <Body />
    </div>
  );
};

export default App;
