import Person from '../assets/images/person.jpg';

function Footer() {
    return (
        <>
            <footer
                style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#EE9972",
                    marginTop: "32px",
                    marginBottom: "32px",
                    justifyContent: 'center',
                    alignItems: "center",
                    height: "417px"
                }}
            >
                <div style={{ width: "60%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <img src={Person} style={{ width: "140px", height: "240px" }} />
                    <div>
                        <span>Doormat Navigation</span>
                        <ul style={{ listStyle: "none" }}>
                            <li a="">Home</li>
                            <li a="">About</li>
                            <li a="">Menu</li>
                            <li a="">Reservations</li>
                            <li a="">Order Online</li>
                            <li a="">Login</li>
                        </ul>
                    </div>

                    <div>
                        <span>Contact</span>
                        <ul style={{ listStyle: "none" }}>
                            <li a="">Address</li>
                            <li a="">Phone Number</li>
                            <li a="">Email</li>
                        </ul>
                    </div>
                    <div>
                        <span>Contact</span>
                        <ul style={{ listStyle: "none" }}>
                            <li a="">Address</li>
                            <li a="">Phone Number</li>
                            <li a="">Email</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
