import "./styles/Chicago.css";
import Image from "../../assets/images/restauranfood.jpg";

function Chicago() {
    return (
        <div className="chicago" id="chicago">
            <div className="chicago-container">
                <div className="chicago-left-section">
                    <div className="chicago-left-content">
                        <span className="chicago-title">Little Lemon</span>
                        <span className="chicago-subtitle">Chicago</span>
                        <span className="chicago-description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </span>
                    </div>
                </div>

                <div className="chicago-image-container">
                    <img
                        src={Image}
                        alt="chicago"
                        className="chicago-left-image"
                    />

                    <img
                        src={Image}
                        alt="chicago2"
                        className="chicago-right-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chicago;
