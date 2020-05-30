import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { Home } from "./Home";
import Location from "./Location/Location";
import MenuContainer from "./Menu/MenuContainer";
import { About } from "./About";
import Order from "./Order/Order";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div className="container"> 
                    <div className="left">                  
                    <div className="logo-container">
                        <img id="logo" src="/assets/Thai-Green-long2.png" alt="Thai Green Leaf"/>
                    </div></div>
                    <div className="right"></div>
                    <div className="nav">
                        <ul className="nav-bar">
                            <li className="left-bttn"><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/menu">Menu</NavLink></li>
                            <li><NavLink to="/location">Location</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li className="right-bttn"><NavLink to="/order">Order Online</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={MenuContainer}/>
                        <Route path="/location" component={Location}/>
                        <Route path="/about" component={About}/>
                        <Route path="/order" component={Order}/>
                    </div>                
                    <div className="footer"><p>dog</p></div>
                </div>


            </HashRouter>
        )
    }
}

export default Main;