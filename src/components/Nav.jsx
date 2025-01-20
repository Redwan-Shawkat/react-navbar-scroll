const Nav = ({ activeSection, scrollingSection, handleScrollSection }) => {
  const navStyle = {
    backgroundColor: "white",
    color: "black",
    textTransform: "uppercase",
    fontFamily: "Times New Roman",
    padding: "10px",
    width: "100vw",
    cursor: "pointer",
    // position: "fixed",
  };

  const ulStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  };

  // const liHStyle = {
  //   margin: "0px 20px",
  //   borderBottom:
  //     activeSection === "home" || scrollingSection === "home"
  //       ? "1px solid black"
  //       : "1px solid white",
  // };

  // const liBStyle = {
  //   margin: "0px 20px",
  //   borderBottom:
  //     activeSection === "body" || scrollingSection === "body"
  //       ? "1px solid black"
  //       : "1px solid white",
  // };

  const liHStyle = {
    margin: "0px 20px",
    // opacity: activeSection === "home" ? "1" : "0.5",
  };

  const liBStyle = {
    margin: "0px 20px",
    // opacity: activeSection === "body" ? "1" : "0.5",
  };

  return (
    <div style={navStyle}>
      <ul style={ulStyle}>
        <li style={liHStyle} onClick={(e) => handleScrollSection(e, "home")}>
          Home
        </li>
        <li style={liBStyle} onClick={(e) => handleScrollSection(e, "body")}>
          Body
        </li>
      </ul>
    </div>
  );
};

export default Nav;
