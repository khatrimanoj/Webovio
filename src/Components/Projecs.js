import React, { Component } from 'react';

class Projecs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: `We Have Some Awesome Project.`,
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
            CasestudyList:[]
        };
    }
    
    componentWillMount() {
        this.setState({
            CasestudyList: [
                {
                    id: 1,
                    title: "The wall new Balenciaga.com",
                    desc: "This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.",
                    button: "See Case Study",
                    file: require('../images/product-img1.png'),
                    testimonial: "“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”",
                    profileImage: require('../images/profile1.png'),
                    testimonialBy: "Angel Armstrong",
                    author: "Founder & CEO, Google"
                },
                {
                    id: 2,
                    title: "Is this the future of 3D model?",
                    desc: "While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire to learn more and more about it. ",
                    button: "See Case Study",
                    file: require('../images/product-img2.png'),
                    testimonial: "“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”",
                    profileImage: require('../images/profile2.png'),
                    testimonialBy: "Lina Hart",
                    author: "Founder & CEO, Jico"
                },
                {
                    id: 3,
                    title: " Is this the future of Online Booking",
                    desc: "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make.",
                    button: "See Case Study",
                    file: require('../images/product-img3.png'),
                    testimonial: "“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”",
                    profileImage: require('../images/profile3.png'),
                    testimonialBy: "Eunice Oliver",
                    author: "Founder & CEO, Zeem"

                }
            ]
        });
    }
    render() {
        return (
            <section className="awesome-projects">
                <div className="container">
                    <div className="heading">
                        <h1 className="main-title">{this.state.title}</h1>
                        <p className="desc">{this.state.desc}</p>
                    </div>
                </div>
                <div className="project-list">
                    {this.state.CasestudyList.map((CasestudyList, i) =>
                    !( i % 2 )
                        ?<div className="projects">
                            <div className="container">
                                <article className="snapshot-testimonial">
                                    <div className="snapshot">  
                                        <div className="product-img">
                                            <img src={CasestudyList.file} alt="Awesome Project" />
                                            <div className="testimonial">
                                                <p className="desc">{CasestudyList.testimonial}</p>
                                                <div className="info">
                                                    <span className="avtar"><img src={CasestudyList.profileImage} alt="Profile Image" /></span>
                                                    <span>
                                                        <h1>{CasestudyList.testimonialBy}</h1>
                                                        <p>{CasestudyList.author}</p>
                                                    </span>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </article>
                                <article className="project-info">
                                <h1 className="main-title">{CasestudyList.title}</h1>
                                <p className="desc">{CasestudyList.desc}</p>
                                <a href="#" className="btn btn-underline">{CasestudyList.button}</a>
                            </article>
                            </div>
                        </div>
                        :<div className="projects even">
                            <div className="container">
                                <article className="project-info">
                                    <h1 className="main-title">{CasestudyList.title}</h1>
                                    <p className="desc">{CasestudyList.desc}</p>
                                    <a href="#" className="btn btn-underline">{CasestudyList.button}</a>
                                </article>
                                <article className="snapshot-testimonial">
                                    <div className="snapshot">
                                        <div className="product-img">
                                            <img src={CasestudyList.file} alt="Awesome Project" />
                                            <div className="testimonial">
                                                <p className="desc">{CasestudyList.testimonial}</p>
                                                <div className="info">
                                                    <span className="avtar"><img src={CasestudyList.profileImage} alt="Profile Image" /></span>
                                                    <span>
                                                        <h1>{CasestudyList.testimonialBy}</h1>
                                                        <p>{CasestudyList.author}</p>
                                                    </span>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Projecs;