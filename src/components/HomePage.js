import "./styles/Homepage.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Ratings from "./Ratings";

function HomePage() {
    return (
        <div className="homepage">
            <Hero />
            <Specials />
            <Ratings />
        </div>
    );
};

export default HomePage;
