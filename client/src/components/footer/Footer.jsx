export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_social_icon">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="location_text">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">+01 1234567890</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">demo@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <textarea className="update_mail" placeholder="Your Email" rows="5" id="comment" name="Your Email"></textarea>
                            <div className="subscribe_bt"><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}