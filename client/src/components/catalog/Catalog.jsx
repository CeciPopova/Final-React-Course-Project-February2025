import { Link } from 'react-router-dom';
import { useCoffees } from '../../api/coffeeApi'
import './Catalog.css'

export default function Catalog() {
    const { coffees } = useCoffees();
    return (
        <div className="coffee_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="coffee_taital">OUR Coffee OFFERS</h1>
                    </div>
                </div>
            </div>
            <div className="coffee_section_2">
                <div className="container-fluid">
                    <div className="row">
                        {coffees.length === 0
                            ? <h1>No coffees yet!</h1>
                            : (

                                <div className="col-lg-3 col-md-6 row-coffees">
                                    {coffees.map((coffee) => (
                                        <div key={coffee._id}>
                                            <div className="coffee_img"><img src={coffee.image} /></div>
                                            <div className="coffee_box">
                                                <h3 className="types_text">{coffee.name}</h3>
                                                <p className="looking_text">${coffee.price}</p>
                                                <div className="read_bt"><Link to={`/coffees/${coffee._id}/details`} >Details</Link></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}