import { Link } from 'react-router-dom';
import { useCoffees } from '../../api/coffeeApi';
import useAuth from '../../hooks/useAuth'
import './Profile.css'

export default function Profile() {
    const { coffees } = useCoffees()
    const { email, username, userId, image } = useAuth();
    console.log(userId);

    const filterCoffees = coffees.filter(coffee => coffee._ownerId === userId)
    console.log(filterCoffees);


    return (
        <>
            <div className="profile-container">

                <div className="profile-header">
                    <img src={image} alt="User Avatar" className="profile-avatar" />
                    <div className="profile-info">
                        <h1 className="profile-name">{username}</h1>
                        <p className="profile-email">{email}</p>
                    </div>
                </div>


                <div className="product-list">
                    <h2 className="section-title">Your Products</h2>
                    <div className="row">
                        {coffees.length === 0
                            ? <h1>No coffees yet!</h1>
                            : (

                                <div className="col-lg-3 col-md-6 row-coffees">
                                    {filterCoffees.map((coffee) => (
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

        
        
        </>
    )
}