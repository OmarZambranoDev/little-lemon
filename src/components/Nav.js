import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./styles/Nav.css";

function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionNavigation = (sectionId, e) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item" >
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item" >
                    <a
                        href="#chicago"
                        className="nav-link"
                        onClick={(e) => handleSectionNavigation('chicago', e)}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item" >
                    <a
                        href="#specials"
                        className="nav-link"
                        onClick={(e) => handleSectionNavigation('specials', e)}
                    >
                        Menu
                    </a>
                </li>
                <li className="nav-item" >
                    <Link to="/booking" className="nav-link">Reservations</Link>
                </li>
                <li className="nav-item" >
                    <a
                        href="#specials"
                        className="nav-link"
                        onClick={(e) => handleSectionNavigation('specials', e)}
                    >
                        Order Online
                    </a>
                </li>
                <li className="nav-item" >
                    <Link to="/" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
