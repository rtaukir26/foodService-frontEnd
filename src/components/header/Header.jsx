import brandLogo from "../../assets/images/brandLogo.png";
import logoutLogo from "../../assets/images/logout.png";
import searchIcon from "../../assets/images/search.png";
import crossIcon from "../../assets/images/cross.png";

const Header = () => {
  return (
    <div className="header_main_container">
      <div className="left">
        <img src={brandLogo} alt="azFood" />
        <span>Zn Food Service</span>
      </div>

      <div className="middle">
        <input type="text" placeholder="search..." id="input" />
        <img anchor="input" src={searchIcon} alt="cross" />
      </div>

      <div className="right">
        <img src={logoutLogo} alt="user" />
      </div>
    </div>
  );
};

export default Header;
