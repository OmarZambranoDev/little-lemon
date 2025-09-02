import logo from '../assets/images/logo.jpg';
import Nav from './Nav';

function Header() {
    return (
        <>
            <header
                style={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: "center",
                    marginTop: "32px",
                    marginBottom: "32px"
                }}
            >
                <div style={{width: "60%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <img src={logo} alt="Logo" style={{ width: "260px" }} />
                    <Nav />
                </div>
            </header>
        </>
    );
}

export default Header;
