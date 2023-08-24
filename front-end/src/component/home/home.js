import React from 'react'
import img3 from "./images/causal.png"
import './home.css';

const Home = () => {
    return (
        <div class="banner column-4" id="banner">
            <div class="text-area">
                <div class="text-part">
                    <h1>Grow Your <span>Skills</span> to Advance Your Career Path</h1>
                    <p>Get technical support in completing any technical project or solving any Coding related Problem.</p>
                </div>
            </div>
            <div class="image-area">
                <img src={img3} alt="pic" />
                <div class="circle"></div>
            </div>
        </div>
    )
}

export default Home;