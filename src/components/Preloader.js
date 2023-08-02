import React, { useEffect } from "react";

import './preloader.css'

const PreLoader = () => {

    // use IIFE function to insulate from global namespace
    // (function () {
    //     var onload = function () {
    //         document.querySelector('.preloader').classList.add('none')
    //     };
    //     window.addEventListener('load', onload);
    // })();


    return (
        <div className="preloader">
            <div className="custom-loader"></div>
        </div>
    );
};

export default PreLoader;