import React from 'react'
import img3  from "./images/causal.png"
import './home.css';

const Home = () => {
    return (
        <div class="banner column-4" id="banner">
            <div class="text-area">
                <div class="text-part">
                    <h1>Grow Your <span>Skills</span> to Advance Your Career Path</h1>
                </div>
            </div>
            <div class="image-area">
                <img src={img3} alt="pic" />
            </div>

        </div>
    )
}

export default Home;