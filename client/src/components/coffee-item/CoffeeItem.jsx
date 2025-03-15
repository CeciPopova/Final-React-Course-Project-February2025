import { Link } from "react-router-dom";

export default function CoffeeItem() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="coffee_img"><img src="images/img-1.png" /></div>
            <div className="coffee_box">
                <h3 className="types_text">TYPES OF COFFEE</h3>
                <p className="looking_text">looking at its layout. The point of</p>
                <div className="read_bt"><Link to="/details">Details</Link></div>
            </div>
        </div>

    )
}