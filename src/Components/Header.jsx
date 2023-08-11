import "./Header.css";
import Navigation from "./Navigation";


const Header = () => {

  return (
    <div className="div-head-container">
      <div className="App">
        <header className="App-header">
          <div className="rotate-text">The</div>
          <div className="Shiren-text">SHIREN</div>
        </header>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
