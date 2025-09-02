function Nav() {
    return (
        <>
            <nav>
                <ul style={{display: "flex", listStyle: "none", gap: 40, justifyContent: "space-around"}}>
                    <li a="">Home</li>
                    <li a="">About</li>
                    <li a="">Menu</li>
                    <li a="">Reservations</li>
                    <li a="">Order Online</li>
                    <li a="">Login</li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
