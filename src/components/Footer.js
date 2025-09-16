import "./styles/Footer.css";
import FooterImg from "../assets/images/person.jpg";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-section logo-section">
                    <img
                        src={FooterImg}
                        alt="Company Logo"
                        className="footer-logo"
                    />
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Door Navigation</h3>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Menu</a></li>
                        <li><a href="#" className="footer-link">Reservations</a></li>
                        <li><a href="#" className="footer-link">Order Online</a></li>
                        <li><a href="#" className="footer-link">Login</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Contact</h3>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Address</a></li>
                        <li><a href="#" className="footer-link">Phone Number</a></li>
                        <li><a href="#" className="footer-link">Email</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Social Media Links</h3>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Address</a></li>
                        <li><a href="#" className="footer-link">Phone Number</a></li>
                        <li><a href="#" className="footer-link">Email</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
