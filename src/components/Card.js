import React from "react";
import star from "../images/star.png";

export default function Card(props){
    let badgeText;
    if (props.obj.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (props.obj.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={props.obj.coverImg} alt="avatar" className="card-image" />
                {badgeText && <p className="card-status">{badgeText}</p>}
            </div>
            <p className="card-rating">
                <img src={star} alt="" className="star-logo" />
                {props.obj.stats.rating} <span>({props.obj.stats.reviewCount}) &middot; {props.country}</span>
            </p>
            <p className="card-description">
                {props.obj.title}
            </p>
            <p className="card-pricing">
                <span>From ${props.obj.price} </span> / person
            </p>
        </div>
    )
}