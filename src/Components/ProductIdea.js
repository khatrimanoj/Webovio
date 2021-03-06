import React, { Component } from 'react';

class ProductIdea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: `Deation & Evaluation - Best Way to Kick off Your Product Idea`,
            ProductItems:[]
        };
    }
    
    componentWillMount() {
        this.setState({
            ProductItems: [
                {
                    id: 1,
                    title: "Product\nDesign Sprint",
                    desc: "A five-day workshop that will help you answer crucial business questions",
                    button: "Read More"
                },
                {
                    id: 2,
                    title: "Scoping Session",
                    desc: "A workshop aimed at shaping your business idea, answering questions regarding project planning",
                    button: "Read More"
                },
                {
                    id: 3,
                    title: "UX\nReview",
                    desc: "An evaluation which will help you radically improve your product.",
                    button: "Read More"
                },
                {
                    id: 4,
                    title: "Code\nReview",
                    desc: "Do you know what one of the key secrets of success is what makes people successful in business.",
                    button: "Read More"
                }
            ]
        });
    }
    render() {
        return (
            <section className="product-idea">
                <div className="container">
                    <h1 className="main-title">{this.state.title}</h1>
                    <ul>
                        {this.state.ProductItems.map((ProductItems) =>
                            <li key={ProductItems.id}>
                                <h1 className="product-title">{ProductItems.title}</h1>
                                <p className="product-desc">{ProductItems.desc}</p>
                                <a href="#" className="btn btn-underline">{ProductItems.button}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default ProductIdea;