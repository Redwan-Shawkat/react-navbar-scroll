const BodyNav = ({ handleScrollSection }) => {
  const linkStyle = {
    color: "white",
    marginRight: "1rem",
  };

  return (
    <div>
      <a
        href="#body"
        style={linkStyle}
        onClick={(e) => handleScrollSection(e, "body")}
      >
        Body
      </a>
    </div>
  );
};

export default BodyNav;
