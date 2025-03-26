import { Link } from "react-router-dom";

export default function Home() {
    return (
        
        <div className="banner_section layout_padding">
            <div className="container">
                <div id="banner_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_taital_main">
                                        <h1 className="banner_taital">Coffee <br />Lovers</h1>
                                        <p className="banner_text">Explore the art and science of exquisite coffee with Coffee Lovers Signature Experiences. With several experiences to choose from, we invite you to learn about best-in-class brewing techniques and mixology skills. Come discover the world of coffee through immersive experiences designed to inspire.</p>
                                        <div className="btn_main">
                                            <div className="about_bt active"><Link to="/about">About Us</Link></div>
                                            <div className="callnow_bt"><Link to="/catalog">Coffees</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_taital_main">
                                        <h1 className="banner_taital">Discover New Coffee Experience</h1>
                                        <p className="banner_text">Choose hot or iced coffee</p>
                                        <div className="btn_main">
                                            <div className="about_bt active"><Link to="/catalog">Coffees</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="banner_taital_main">
                                        <h1 className="banner_taital">Coffee <br />Lovers</h1>
                                        <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                                        <div className="btn_main">
                                            <div className="about_bt active"><Link to="/login">Login</Link></div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}