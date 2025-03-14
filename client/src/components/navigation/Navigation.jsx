import './Navigation.css'

import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/catalog"><img src="images/coffeeLogo.png" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Coffees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">Contact</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="login_bt">
                            <ul>
                                <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                                <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </div>

    )
}