import React from "react";
import "./Footer.css";
import playStore from "../../../images/playstore.png";

const Footer = () =>{
    return(
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download Our APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playStore" />
            </div>

            <div className="middleFooter">
                <h1>Ecommerce</h1>
                <p>High quality is our first priority</p>
                <p>Copyrights 2022 &copy; Ecommerce </p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.youtube.com/watch?v=AN3t-OmdyKA">Instagram</a>
                <a href="https://www.youtube.com/watch?v=AN3t-OmdyKA">Youtube</a>
                <a href="https://www.youtube.com/watch?v=AN3t-OmdyKA">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;