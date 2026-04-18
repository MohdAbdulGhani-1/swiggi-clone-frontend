const RestaurantMenuInfoCard = ({ menu }) => {
      const { name, avgRatingString, totalRatingsString, cuisines } =
    menu?.data?.cards[2]?.card?.card?.info || {};
    return (
        <div className="restaurant-menu-info"  style={{color: "white"}}>
            <h1>{name}</h1>
            <div className="restaurant-menu-info-rating">
                🌟 {avgRatingString} ({totalRatingsString})
            </div>
            <p className="restaurant-menu-info-cuisines">{cuisines?.join(", ")}</p>
        </div>
    )
}

export default RestaurantMenuInfoCard;