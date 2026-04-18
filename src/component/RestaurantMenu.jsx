import { useParams } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const resId = useParams().resId;
    const menu = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    const dummyData = "props drilling";
    if (!menu) {
            return <h1 style={{margin: "120px"}}>Loading...</h1>;
        }

    const categories =
        menu?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
        (category) => {
            return (
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
        },
        ) || [];
    
    
    
    return (
    <div
      style={{
            paddingLeft: "340px",
            paddingTop: "100px",
            paddingBottom: "50px",
            paddingRight: "340px",
        }}
        >
        <RestaurantMenuInfoCard menu={menu} />
        <h2>Menu:</h2>
        {categories.map((category, index) => (
            <RestaurantCategory
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
            setIndex={() => {
                setShowIndex(index === showIndex ? null : index);
            }}
            showItems={index === showIndex ? true : false}
            dummyData={dummyData}
            />
        ))}
    </div>
    );
};

export default RestaurantMenu;