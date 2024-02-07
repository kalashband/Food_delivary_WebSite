import { useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import Shimmer from './ShimmerUi';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import RestaurantCard, { WithOpenedLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restlist, setRestlist] = useState([]);
    //  whenever state variable is update react trigger a reconcilalition cycle (re-render the componenet )

    const RestaurantCardOpened = WithOpenedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json();
        console.log(json, "body");

        const restaurants1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const restaurants2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // Merging both sets of restaurants into a single array
        console.log(restaurants1.length, restaurants2.length);

        const mergedRestaurants = [...restaurants1, ...restaurants2];
        // optional chaining
        console.log(mergedRestaurants , "fdsf");
        setRestlist(mergedRestaurants);

    };
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        <h1>Oops Yours Offline !!!</h1>
    }
    console.log(restlist);

    return restlist.length === 0 ? (<Shimmer />) : (
        <>
            <div className='body_cont'>
                <SearchBar data={restlist} />
                <div className='Filter'>

                    <Button variant="contained"
                        className='Filter-rate'
                        onClick={() => {
                            // filter top rest
                            const filterlist = restlist.filter(
                                (res) => res.info.avgRating > 4
                            );
                            // console.log(filterlist);
                            setRestlist(filterlist);
                        }}
                    > Top Rated Restaurant </Button>
                </div>
                <div className='Rest-container'>
                    {
                        restlist.map((Restaurant) => (
                            <Link key={Restaurant.info.id}
                                to={"/restaurant/" + Restaurant.info.id}
                                style={{ textDecoration: 'none' }}>

                                {/* if the restaurant is open then add open label to it */}
                                {Restaurant.info.isOpen ? (<RestaurantCardOpened resData={Restaurant} />) : (<RestaurantCard resData={Restaurant} />)}
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );

}

export default Body;