import RatingsCard from "./RatingsCard";
import "./styles/Ratings.css";

function Ratings() {
    return (
        <div className="ratings">
            <div className="ratings-container">
                <span className="ratings-title">Testimonials</span>
                <div className="ratings-card-container">
                    <RatingsCard name={"John Doe"} rating={5}/>
                    <RatingsCard name={"Jane Doe"} rating={4}/>
                    <RatingsCard name={"John Hancock"} rating={3}/>
                    <RatingsCard name={"Jenny Doe"} rating={2}/>
                </div>
            </div>
        </div>
    );
};

export default Ratings;
