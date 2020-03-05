import React, { Component } from 'react';
import Logo from '../images/Logo.png';
import MenuToggle from '../images/menu-toggle-icon.png';

class Hearder extends Component {
    state = {
        isOpen: false,
        className: ""
    }
  
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
  
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
            this.setState({ className: "black-transparent" });   
            }
        }else{
            if(this.state.className){
            this.setState({ className: "" });
            }
        }
    
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        const HeroContent = {
            subTitle: `Digital Design Studio`,
            mainTitle: `A creative agency for Innovative ideas`,
            Desc: `We are the answer for both the individual needs of clients as well as complete projects - from idea to execution.`,

        }
        return (
            <header className={this.state.className}>
                <nav >
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
                            <span className="sub-title text-white">{HeroContent.subTitle}</span>
                            <h1 className="main-title text-white">{HeroContent.mainTitle}</h1>
                            <p className="desc text-white">{HeroContent.Desc}</p>
                            <button className="btn btn-yellow text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Hearder;