import React from 'react'
import img3 from "./images/causal.png"
import './home.css';

const Home = () => {
    return (
        <div class="banner column-4" id="banner">
            <div class="text-area">
                <div class="text-part">
                    <h1>Grow Your <span>Skills</span> to Advance Your Career Path</h1>
                    <p>We are here to provide technical support in completing any technical project or solving any Coding related Problems. Also you can download Hand written/Animated Notes from us like Git, Data Structures, Algorithms, React, Nodejs, Angular, Oops etc. </p>
                </div>
            </div>
            <div class="image-area">
                <img src={img3} alt="pic" />
                <div class="circle"></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home;