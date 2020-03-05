import React, { Component } from 'react';
import ClientCarousel from '../Components/Clients';
import WhatWeDo from '../Components/WhatWeDo';
import ProductIdea from '../Components/ProductIdea';

class Home extends Component {
    render() {
        return (
            <>
                <ClientCarousel />
                <WhatWeDo />
                <div className="container">
                    <hr></hr>
                </div>
                {/* <ProductIdea /> */}
            </>
        );
    }
}

export default Home;