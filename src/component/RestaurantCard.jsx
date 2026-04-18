import { Link } from "react-router-dom";

function RestaurantCard(props){
    const apiUrl = import.meta.env;
    return(
        <Link to={`/restaurants/${props.restaurantList.info.id}`} className="restaurant-link" >
        <div className="restaurentCard">
            <img src={`${apiUrl.VITE_restaurantCardImagesUrl}${props.restaurantList.info.cloudinaryImageId}`} alt={props.restaurantList.info.name} className="cardImg"/>
            <h2>{props.restaurantList.info.name}</h2>
            <h3>{props.restaurantList.info.avgRating}star. {props.restaurantList.info.sla.deliveryTime}mins</h3><br/>
            <h4>{props.restaurantList.info.costForTwo}</h4>
            <p>{props.restaurantList.info.cuisines.join(", ")}</p>
            <p>{props.restaurantList.info.locality}</p>
        </div>
        </Link>
    );
}
export default RestaurantCard;