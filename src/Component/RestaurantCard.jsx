import React from 'react'


export const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info || {};
    const deliveryTime = sla?.deliveryTime;
    return (
        <>
            <div className='Rest-Card'>
                <img
                    className='res-logo'
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
                    }
                    alt='img' />
                <div className='desp-Rest'>
                    <div className='left-side'>
                        <h3>{name}</h3>
                        <h5>{cuisines.join(" , ")}</h5>
                    </div>
                    <div className='right-side'>
                        <span>{avgRating}*</span>
                        <h5>{costForTwo} </h5>
                        <h6>{deliveryTime} min</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

// higher order component   input - restaurantcard ==> RestaurantOpenCard

export const WithOpenedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='Openlabel'>Open</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
