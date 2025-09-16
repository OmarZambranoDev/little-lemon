import logo from "../assets/images/logo.jpg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" >
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
