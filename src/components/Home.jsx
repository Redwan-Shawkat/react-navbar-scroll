const Home = () => {
  const homeStyle = {
    backgroundColor: "red",
    textTransform: "uppercase",
    fontFamily: "Times New Roman",
    padding: "10px",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div id="home" style={homeStyle}>
      This is the home section
    </div>
  );
};

export default Home;
