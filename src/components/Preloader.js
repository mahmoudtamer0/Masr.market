import React, { useEffect } from "react";

import './preloader.css'

const PreLoader = () => {

    window.addEventListener('load', (event) => {
        document.querySelector('.preloader').classList.add('none')
    })
    return (
        <div className="preloader">
            <div className="custom-loader"></div>
        </div>
    );
};

export default PreLoader;