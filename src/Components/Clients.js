import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'

class Clients extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="client-img">
                        <ul>
                            <li><img src={client1} alt="client1" /></li>
                            <li><img src={client2} alt="client2" /></li>
                            <li><img src={client3} alt="client3" /></li>
                            <li><img src={client4} alt="client4" /></li>
                            <li><img src={client5} alt="client5" /></li>
                        </ul>
                        <div className="white-empty-overlay"></div>
                    </div>
                </div>
                {/* <Carousel showArrows={true} showThumbs="false">
                    <div>
                        <img src={client1} alt="client 1" />
                    </div>
                    <div>
                        <img src={client2} alt="client 2" />
                    </div>
                    <div>
                        <img src={client3} alt="client 3" />
                    </div>
                    <div>
                        <img src={client4} alt="client 4" />
                    </div>
                    <div>
                        <img src={client5} alt="client 5" />
                    </div>
                </Carousel> */}
            </>
        );
    }
}

export default Clients;