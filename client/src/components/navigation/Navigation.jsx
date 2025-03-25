import styles from './Navigation.module.css'

import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function Navigation() {

    const { isAuthenticated, email } = useAuth();

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className={styles["navbar-brand"]} to="/blog"><img src="images/coffeeLogo.png" /></Link>
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
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        {isAuthenticated

                            ? (<li className="nav-item">
                                <Link className="nav-link" to="/create">Create</Link>
                            </li>)
                            : ''
                        }
                    </ul>


                    <form className="form-inline my-2 my-lg-0">
                        {!isAuthenticated
                            ? (<div className="login_bt">
                                <ul>
                                    <li><Link to="/login"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</Link></li>

                                </ul>
                            </div>)

                            : (<div className="login_bt">
                                <ul>
                                    <li><Link to="/logout"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Logout {email}</Link></li>
                                </ul>
                            </div>)
                        }
                    </form>
                </div>
            </nav>
        </div>

    )
}