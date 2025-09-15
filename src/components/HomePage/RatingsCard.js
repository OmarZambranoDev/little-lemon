import "./styles/RatingsCard.css";
import { MdPerson } from "react-icons/md";

function RatingsCard({ name, rating }) {
    return (
        <div className="ratings-card">
            <span className="ratings-text">Rating: {rating}</span>
            <div className="ratings-icon">
                <MdPerson size={40} />
                <span className="ratings-text">{name}</span>
            </div>
            <span className="ratings-review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec accumsan lorem. Sed in vulputate sapien. Nam tempor pretium nunc ac malesuada. Sed euismod, ante id luctus fermentum, nunc eros aliquam libero, in egestas ligula mauris in nibh. Proin vestibulum ante in nisl cursus, id placerat orci pulvinar. Fusce ut mattis purus. Proin iaculis tempor ante.
            </span>

        </div>
    );
};

export default RatingsCard;