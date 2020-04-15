import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Location from "./Location/Location";
import Menu from "./Menu/Menu";
import About from "./About";
import Order from "./Order/Order";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div className="container"> 
                    <ul className="nav-bar">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/location">Location</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/order">Order Online</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/location" component={Location}/>
                        <Route path="/about" component={About}/>
                        <Route path="/order" component={Order}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;