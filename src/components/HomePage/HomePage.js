import "./styles/Homepage.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Ratings from "./Ratings";
import Chicago from "./Chicago";

function HomePage() {
    return (
        <div className="homepage">
            <Hero />
            <Specials />
            <Ratings />
            <Chicago />
        </div>
    );
};

export default HomePage;
