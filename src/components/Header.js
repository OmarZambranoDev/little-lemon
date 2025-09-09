import logo from "../assets/images/logo.jpg";
import Nav from "./Nav";
import "./styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="Logo" style={{ width: "260px" }} />
                <Nav />
            </div>
        </header>
    );
}

export default Header;
