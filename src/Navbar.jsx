const Navbar = ({ activeSection }) => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        position: "sticky",
        top: 0,
      }}
    >
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li
          style={{
            margin: "0 1rem",
            color: activeSection === "home" ? "orange" : "white",
          }}
        >
          {" "}
          Home{" "}
        </li>
        <li
          style={{
            margin: "0 1rem",
            color: activeSection === "body" ? "orange" : "white",
          }}
        >
          {" "}
          Body{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
