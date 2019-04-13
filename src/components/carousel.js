import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
import "./carousel.min.css";


export default () => <Carousel autoPlay>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/patch-that.appspot.com/o/banner2.jpg?alt=media&token=377fdbea-8263-47e4-8c92-2218349513ed"/>
            <h1 className="legend">ONE STOP SHOP TO PURCHASE UNIQUE PATCHES AND DESIGN</h1>
        </div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/patch-that.appspot.com/o/background-img.jpg?alt=media&token=4e4f1be0-3a61-4be6-9d2a-2f46dc0883c3" />
            <p className="legend">SELL YOUR OWN PATCH DESIGNS</p>
        </div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/patch-that.appspot.com/o/IMG_0547.jpg?alt=media&token=32b3c5db-6b6c-482d-a2b7-43dcb1ac6007" />
            <p className="legend">DESIGN YOUR OWN PATCHES AND PROMOTE</p>
        </div>
    </Carousel>



