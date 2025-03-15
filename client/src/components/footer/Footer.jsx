

export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_social_icon">
                            <ul>
                                <li><a href="https://www.facebook.com/ceci.popova"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://x.com/PopovaCeci"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/ceci-popova-2895a7219/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/cecipopova/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="location_text">
                            <ul>
                                <li>
                                    <a href="https://globfone.com/call-phone/">
                                        <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">+00 123 456 789</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://account.microsoft.com/profile">
                                        <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">coffee_lovers@hotmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}