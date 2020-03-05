import React, { Component } from 'react';
import ProfileImage from '../images/profile.png';

class WhatWeDo extends Component {
    render() {
        const WeDo = {
            subTitle: `What we do for you`,
            mainTitle: `Strategy. Design  Content. Technology Development `,
            Desc: `There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.`,
            testimonial: `With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed`,
            name: `Genevieve Rodriquez`,
            authore: 'Founder & CEO, Webovio'
        }
        return (
            <section className="what-we-do">
                <div className="container">
                    <div className="flex-div">
                        <article>
                            <span className="sub-title">{WeDo.subTitle}</span>
                            <h1 className="main-title">{WeDo.mainTitle}</h1>
                            <p className="desc">{WeDo.Desc}</p>
                            <button className="btn btn-underline" data-text="More know About us">More know About us</button>
                        </article>
                        <article className="testimonial">
                            <p>{WeDo.testimonial}</p>
                            <div className="info">
                                <span className="avtar"><img src={ProfileImage} alt="Client Avtar" /></span>
                                <span>
                                    <h1>{WeDo.name}</h1>
                                    <p>{WeDo.authore}</p>
                                </span>
                            </div>
                        </article>
                    </div> 
                </div>
            </section>
        );
    }
}

export default WhatWeDo;