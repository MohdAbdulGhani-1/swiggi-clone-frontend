import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("we found you offline");
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      console.log("we found you online");
      setIsOnline(true);
    });
  });

  return isOnline;
};

export default useOnlineStatus;