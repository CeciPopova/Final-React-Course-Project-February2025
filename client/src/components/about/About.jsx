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
          <div className={styles["row"]}>
            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital_1">Our Process</h1>
                <p className=" about_text">From bean to cup, we take care of every step in our coffee-making process. Our expert roasters meticulously roast our beans to bring out the unique flavors and aromas characteristic of each variety. We offer a wide range of blends and single-origin coffees, ensuring there&apos;s something for every palate.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles["image_iman"]}><img src="../../../public/images/caputsino.jpg" className={styles["about_img"]} /></div>
            </div>
          </div>
          <div className={styles["row"]}>
          <div className="col-md-6">
              <div className={styles["image_iman"]}><img src="../../../public/images/coffeeBeans.jpg" className={styles["about_img"]} /></div>
            </div>

            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital_1">Community Focused</h1>
                <p className=" about_text">At <span className={styles["strong"]}>Coffee Lovers</span>, we believe in giving back. A portion of our proceeds goes to initiatives that support farmers, sustainable agriculture, and community development. We are committed to fostering positive change within the coffee industry and beyond.</p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital_1">Join Us</h1>
                <p className=" about_text">We invite you to explore our range of coffees and join our community of coffee lovers. Whether you’re brewing at home or visiting one of our cafes, we’re here to make your coffee experience unforgettable.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles["image_iman"]}><img src="images/about-img.png" className={styles["about_img"]} /></div>
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
    </div>

  )
}