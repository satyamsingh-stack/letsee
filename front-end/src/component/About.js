/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "./img.jpg"


const About = () => {
    let message = `We Created this app to provide tech help to client across the world`;
    return (
        <section class="section-white">

            <div class="about_container">

                <div class="row">

                    <div class="col-md-12 text-center">

                        <h2 class="section-title">The Team Behind this Application</h2>

                        <p class="section-subtitle">{message}</p>

                    </div>

                    <div class="col-sm-6col-md-4">

                        <div class="team-item">

                            <img
                                alt="Satyam"
                                src={img} />
                            <h3>Satyam Singh</h3>
                            <div class="team-info"><p>Founder</p></div>
                            <p>Satyam Singh is our founder and has developed this web-app, he is a full-stack Software developer</p>

                            <ul class="team-icon">

                                <li><a href="https://instagram.com/thissatyamsingh?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" class="instagram">
                                    <i class="fa fa-instagram"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/in/dynamic-stu/" class="linkedin">
                                    <i class="fa fa-linkedin"></i>
                                </a></li>

                                <li><a href="https://github.com/satyamsingh-stack" class="github">
                                    <i class="fa fa-github"></i>
                                </a></li>
                            </ul>


                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About;