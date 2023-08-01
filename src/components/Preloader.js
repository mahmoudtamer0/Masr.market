import React, { useEffect } from "react";

import './preloader.css'

const PreLoader = () => {

    window.addEventListener('load', (event) => {
        setTimeout(() => {
            document.querySelector('.preloader').classList.add('none')
        }, 1500)
    })
    return (
        <div className="preloader">
            <div class="custom-loader"></div>
        </div>
    );
};

export default PreLoader;