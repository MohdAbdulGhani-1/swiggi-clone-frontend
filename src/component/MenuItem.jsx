const MenuItems = ({menuItem, dummyData}) => {
    const apiUrl = import.meta.env;
    return (
        <div className="menu-item-card">
            <div className="menu-item-content">
                <h3>{menuItem?.name}</h3>
                <div className="menu-item-price">₹{menuItem?.price ? menuItem?.price / 100 : menuItem?.defaultPrice / 100}</div>
                <div className="menu-item-rating">
                    ⭐ {menuItem?.ratings?.aggregatedRating?.rating } ({menuItem?.ratings?.aggregatedRating?.ratingCountV2})
                </div>
                <p className="menu-item-description">{menuItem?.description}</p>
            </div>
            <div>
                <img className="menu-item-image" src={`${apiUrl.VITE_menuImagesUrl}${menuItem?.imageId}`} alt={menuItem?.name} />
            </div>
        </div>
    )
};
export default MenuItems;