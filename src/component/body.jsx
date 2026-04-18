import { useEffect, useState, useContext } from "react";
import { restaurantList,swiggy } from "../utils/restaurentList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import HotelListContext from "../utils/HotelListContext";
import FilterByRating from "./FilterByRating";
import cors from "cors";

cors();


function Body(){
    
    const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } = useContext(HotelListContext);

    const isOnline = useOnlineStatus();
    const apiUrl = import.meta.env;

    useEffect(() => {
        console.log('data called');
        getCF(apiUrl.VITE_bodyBackendUrl);
    },[])

    async function getCF(url) {
        try {
            const rowData = await fetch(url);
            const json = await rowData.json();
            

            if (json?.data?.cards.length > 11) {
                setHotelList(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
                setFilteredHotelList(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
            } else {
                setHotelList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
                setFilteredHotelList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
            }
        } catch (error) {
            console.log("error while fetching data", error);
            
        }
    
    }

    if (!isOnline) {
        return (
        <div className="body">
            <h1 style={{ padding: "10vh 1.5rem", textAlign: "center" }}>
            🔴 You are offline. Please check your internet connection.
            </h1>
        </div>
        );
    }

    if(hotelList.length === 0){
        return <div className="card-container">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </div>
    }

    return (<div id="body">
        <FilterByRating />
        {/* <div className="filterBtn">
        <button id="idBtn" onClick={() => {
            let filteredArr = restaurantList.filter((item) => {
                return item.avgRating > 4.5
            });
            sethotelList(filteredArr);
        
        }}>Top Resturents</button>
        </div> */}
        {
            filteredHotelList.map((item) => (
                <RestaurantCard key={item.info.id} restaurantList={item} />
            ))
        }
    </div>);
}
export default Body;