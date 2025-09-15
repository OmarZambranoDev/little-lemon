import "./styles/Specials.css";
import MenuItem from "./MenuItem";
import Button from "../Button";
import Salad from "../../assets/images/greek_salad.jpg";
import Bruchetta from "../../assets/images/bruchetta.jpg";
import LemonDessert from "../../assets/images/lemon_dessert.jpg";
import { MENU_ITEM_DESC } from "../utils/constants";

function Specials() {
    return (
        <div className="specials">
            <div className="specials-container">
                <div className="specials-header">
                    <span className="specials-title">This weeks specials!</span>
                    <div className="button-container">
                        <Button text={"Online Menu"} />
                    </div>
                </div>

                <div className="menu-item-container">
                    <MenuItem image={Salad} item={"Greek Salad"} price={"$12.99"} description={MENU_ITEM_DESC.SALAD} />
                    <MenuItem image={Bruchetta} item={"Bruchetta"} price={"$5.99"} description={MENU_ITEM_DESC.BRUCHETTA}/>
                    <MenuItem image={LemonDessert} item={"Lemon Dessert"} price={"$5.00"} description={MENU_ITEM_DESC.LEMON_DESSERT}/>
                </div>
            </div>
        </div>
    );
};

export default Specials;
