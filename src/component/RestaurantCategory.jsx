import MenuItem from "./MenuItem";
import { useState } from "react";

const RestaurantCategory = ({ category, showItems, setIndex, dummyData }) => {
  const handleClick = () => {
    setIndex();
  };

  return (
    <div className="category-accordian">
      <div className="category-header" onClick={handleClick}>
        <span>
          {category.title} ({category.itemCards.length})
        </span>{" "}
        <span>⬇️</span>
    </div> 

    {
        showItems && (
            <div className="menu-item">
            {
                category.itemCards.map((itemCard) => {
                    return (
                    <MenuItem
                        key={itemCard.card.info.id}
                        menuItem={itemCard.card.info}
                        dummyData={dummyData}
                    />
                    );
                })
            }
            </div>
        )
    }
    </div>
  );
};

export default RestaurantCategory;