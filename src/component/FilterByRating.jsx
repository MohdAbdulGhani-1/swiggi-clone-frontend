import { useContext, useState } from "react";
import HotelListContext from "../utils/HotelListContext";

const FilterByRating = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const { hotelList, setFilteredHotelList } = useContext(HotelListContext);

  const filterByRating = () => {
    let filteredArr = hotelList.filter((items) => {
      return items.info.avgRating > 4.3;
    });
    return filteredArr;
  };

  return (
    <div className="filter-btn-div">
      <button className="filter-btn"
        onClick={() => {
          if (filterToggle) {
            setFilteredHotelList(hotelList);
            setFilterToggle(false);
          } else {
            setFilteredHotelList(filterByRating());
            setFilterToggle(true);
          }
        }}
      >
        {filterToggle ? "Show All Restaurants" : "Top Rated Restaurants"}
      </button>
    </div>
  );
};

export default FilterByRating;