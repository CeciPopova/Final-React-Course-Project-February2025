import { useLatestCoffees } from '../../api/coffeeApi'
import './Blog.css'
import moment from 'moment';

export default function Blog() {

    const { latestCoffees } = useLatestCoffees();

    return (
        <div className="blog_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="about_taital">Latest Coffee Drinks</h1>
                    </div>
                </div>
                <div className="blog_section_2">
                    <div className="row">
                        {latestCoffees.map(coffee =>
                        (
                            <div key={coffee._id} className="col-md-6">
                                <div className="blog_box">
                                    <div className="blog_img"><img src={coffee.image} /></div>
                                    <h4 className="date_text">{coffee.price} $</h4>
                                    <h4 className="prep_text">{coffee.name}</h4>
                                    <div>
                                        <p className="lorem_text"><strong>ingredients: </strong> {coffee.ingredients}</p>
                                        <p className="lorem_text"><strong>Caffeine: </strong> {coffee.caffeine_mg}mg</p>
                                        <p className="lorem_text"><strong>Size: </strong> {coffee.serving_size_ml}ml</p>
                                        <p className="lorem_text"><strong>Added on: </strong>{moment(coffee._createdOn).format('LL')}</p>

                                    </div>

                                </div>
                                <div className="read_btn"><a href="#">Read More</a></div>
                            </div>)
                        )}
                        {/* <div className="col-md-6">
                            <div className="blog_box">
                                <div className="blog_img"><img src="images/blog-img2.png" /></div>
                                <h4 className="date_text">05 April</h4>
                                <h4 className="prep_text">Enjoy Best Coffee</h4>
                                <p className="lorem_text">distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
                            </div>
                            <div className="read_btn"><a href="#">Read More</a></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}