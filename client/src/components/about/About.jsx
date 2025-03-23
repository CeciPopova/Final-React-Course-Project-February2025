import styles from './About.module.css'


export default function About() {
  return (
    <div className={styles["about_section"]}>

      <div className="container">
        <div className={styles["about_section_2"]}>
          <div className="about_title">
            <h1 className="about_taital">About Us</h1>
          </div>

          <div className={styles["row"]}>
            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital_1">Welcome to Coffee Lovers</h1>
                <p className=" about_text">At <span className={styles["strong"]}>Coffee Lovers</span>, we believe that coffee is more than just a beverage; it&apos;s an experience that brings people together. Founded in 1993, our journey began with a passion for exceptional coffee and a commitment to sustainability. We source our beans from the finest coffee-growing regions around the world, partnering with local farmers who share our dedication to quality and ethical practices.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles["image_iman"]}><img src="../../../public/images/Espressolab-01.png" className={styles["about_img"]} /></div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className="col-md-6">
              <div className={styles["image_iman"]}><img src="../../../public/images/coffeeBeans.jpg" className={styles["about_img"]} /></div>
            </div>

            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital_1">Our mission</h1>
                <p className=" about_text">Our mission is simple: to provide the highest quality coffee while promoting sustainable farming practices that respect both the environment and the communities we work with. We strive to create a meaningful connection between our customers and the source of their coffee, sharing the stories behind each cup.</p>
              </div>
            </div>
          </div>


          
            <div className="container">
                <div id="custom_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="about_taital">What syas customers</h1>
                                </div>
                            </div>
                            <div className="client_section_2">
                                <div className="client_taital_main">
                                    <div className="client_left">
                                        <div className="client_img"><img src="images/client-img1.png" /></div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="moark_text">Joy Moark</h3>
                                        <p className="client_text">now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="about_taital">What syas customers</h1>
                                </div>
                            </div>
                            <div className="client_section_2">
                                <div className="client_taital_main">
                                    <div className="client_left">
                                        <div className="client_img"><img src="images/client-img1.png" /></div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="moark_text">Joy Moark</h3>
                                        <p className="client_text">now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="about_taital">What syas customers</h1>
                                </div>
                            </div>
                            <div className="client_section_2">
                                <div className="client_taital_main">
                                    <div className="client_left">
                                        <div className="client_img"><img src="images/client-img1.png" /></div>
                                    </div>
                                    <div className="client_right">
                                        <h3 className="moark_text">Joy Moark</h3>
                                        <p className="client_text">now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#custom_slider" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles["cheers"]}>
            <p><span className='strong'>Thank you for being a part of our journey!</span></p>
            <p>Cheers,<br />
              The <span className={styles["strong"]}>Coffee Lovers</span> Team</p>
            {/* <div className="readmore_btn"><a href="#">Read More</a></div> */}

          </div>

        </div>

      </div>
    

  )
}