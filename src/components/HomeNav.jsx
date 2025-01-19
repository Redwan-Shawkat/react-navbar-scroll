import React from "react";

const HomeNav = ({ handleScrollSection }) => {
  const linkStyle = {
    color: "white",
    marginRight: "1rem",
  };

  return (
    <div>
      <a
        href="#home"
        style={linkStyle}
        onClick={(e) => handleScrollSection(e, "home")}
      >
        Home
      </a>
    </div>
  );
};

export default HomeNav;
