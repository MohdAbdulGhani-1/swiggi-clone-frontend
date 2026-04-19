import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const data = await fetch(`${import.meta.env.VITE_useRestaurentMenuUrl}${resId}`);
      const json = await data.json();
      // console.log("Fetched Menu Data: ", json); 
      setMenu(json);
    } catch (error) {
      console.log("Error while fetching the MENU_API:: ", error);
    }
  };

  return menu;
};

export default useRestaurantMenu;