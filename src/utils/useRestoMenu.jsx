import React, { useEffect, useState } from 'react'


const useRestoMenu = (resId) => {
    const [restoInfo, setRestoInfo] = useState(null);


    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setRestoInfo(json.data);
        // console.log(json.data, "jsonRestinfo");
    }
    return restoInfo;
}

export default useRestoMenu