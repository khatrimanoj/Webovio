import React, { Component } from 'react';
import Logo from '../images/Logo.png';
import MenuToggle from '../images/menu-toggle-icon.png';

class Hearder extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <header>
                <nav>
                    <div className="brand-name">
                        <a href="#">
                            <img src={Logo} alt="Webovio" />
                        </a>
                    </div>
                    <div className="navigation">
                        <button type="button" className={this.state.isOpen ? "nav-toggle-btn open" : "nav-toggle-btn"} onClick={this.handleToggle}>
                            <img src={MenuToggle} alt="toggle icon" />
                        </button>
                        <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <ul>
                                {this.props.navItem.menu.map((menu,i) => <li key={i}><a href="#">{menu}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header-content">
                    <div className="container">
                        <div className="hero-text">
                            <span className="sub-title text-white">Digital Design Studio</span>
                            <h1 className="main-title text-white">A creative agency for Innovative ideas</h1>
                            <p className="desc text-white">We are the answer for both the individual needs of clients as well as complete projects - from idea to execution.</p>
                            <button class="btn btn-yellow text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Hearder;