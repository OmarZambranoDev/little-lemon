import "./styles/MenuItem.css";
import { MdMoped } from 'react-icons/md';

function MenuItem({ image, item, price, description }) {
    return (
        <div className="menu-item">
            <img className="menu-image" src={image} alt="menu item"/>
            <div className="menu-header">
                <h3 className="menu-title">{item}</h3>
                <h3 className="menu-price">{price}</h3>
            </div>
            <p className="menu-description">
                {description}
            </p>
            <button type="button" className="menu-order-button" onClick={() => console.log('CLICKED')}>Order a delivery <MdMoped size={26} /></button>
        </div>
    );
};

export default MenuItem;
