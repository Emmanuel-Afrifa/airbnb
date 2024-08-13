import React from "react";
import heroImg from "../images/photo-grid.png";

export default function Hero(){
    return (
        <div className="hero-container">
            <img src={heroImg} alt="grid of images" className="photo-grid" />
            <h1 className="main-title">Online Experience</h1>
            <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}