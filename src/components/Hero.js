import "./styles/Hero.css";
import Button from "./Button";
import Image from "../assets/images/restauranfood.jpg";

function Hero() {
    const onClick = () => {
        console.log('I WAS CLICKED');
    };

    return (
        <div className="hero">
            <div className="hero-container">
                <div className="left-section">
                    <div className="left-content">
                        <span className="title">Little Lemon</span>
                        <span className="subtitle">Chicago</span>
                        <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        <div className="button-container">
                            <Button text={"Reserve a Table"} onClick={onClick} />
                        </div>
                    </div>
                </div>

                <div className="image-section">
                    <img
                        src={Image}
                        alt="food"
                        className="image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
