import ShimmerResto from "./ShimmerUIResto";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";
import RestoCategory from "./RestoCategory";


const RestoMenu = () => {

    const { resId } = useParams();

    const restoInfo = useRestoMenu(resId);


    if (restoInfo === null) return <ShimmerResto />

    const { name, cuisines, locality, city, id, avgRatingString } =
        restoInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = ((restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) || (restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card));

    // console.log(itemCards, "itemCArd");

    const Categories =
        restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            // "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    // console.log(Categories, "cate");

    return (
        <>
            <div className="Menu">
                <h1>{name}</h1>
                <div className=" menu_first">
                    <p>{cuisines.join(", ")}</p>
                    <hr />
                    <p>{locality}, {city}</p>
                    <hr />
                    <p className="rating">{avgRatingString} *</p>
                </div>

                {Categories.map((category) =>
                    (<RestoCategory data={category?.card?.card} />)
                )}
            </div>
        </>
    );
};

export default RestoMenu;



