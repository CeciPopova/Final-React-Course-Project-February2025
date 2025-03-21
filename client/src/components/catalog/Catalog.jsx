import './Catalog.css'
import { useEffect, useState } from "react";

import CoffeeItem from "../coffee-item/CoffeeItem";

export default function Catalog() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/coffees")
            .then((res) => res.json())
            .then((data) => setCoffees(data));
    }, []);

    return (
        <div className="coffee_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="coffee_taital">OUR Coffee OFFER</h1>
                    </div>
                </div>
            </div>
            <div className="coffee_section_2">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <CoffeeItem />

                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                                        {coffees.map((coffee) => (

                                            <div key={coffee._id} className="col-lg-3 col-md-6" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
                                                <img src={coffee.image} alt={coffee.name} style={{ width: "100%", borderRadius: "5px" }} />
                                                <h2>{coffee.name}</h2>
                                                <p><strong>Ingredients:</strong> {coffee.ingredients.join(", ")}</p>
                                                <p><strong>Caffeine:</strong> {coffee.caffeine_mg}mg</p>
                                                <p><strong>Price:</strong> ${coffee.price.toFixed(2)}</p>
                                            </div>

                                        ))}
                                    </div>


                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-3.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE & PASTRY</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-4.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE TO GO</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <CoffeeItem />
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-2.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">BEAN VARIETIES</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-3.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE & PASTRY</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-4.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE TO GO</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-1.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">TYPES OF COFFEE</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-2.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">BEAN VARIETIES</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-3.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE & PASTRY</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-4.png" /></div>
                                        <div className="coffee_box">
                                            <h3 className="types_text">COFFEE TO GO</h3>
                                            <p className="looking_text">looking at its layout. The point of</p>
                                            <div className="read_bt"><a href="#">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}