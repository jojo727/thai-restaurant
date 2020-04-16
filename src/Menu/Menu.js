import React, { Component } from "react";
import MenuContainer from "./MenuContainer"
import "./Menu.scss"

class Menu extends Component{
    render(){
        return(
        <div className="menu">
            <div className="menu-type">
                <h1>All Day Menu</h1>
                <h1>Lunch Specials</h1>
            </div>
            <MenuContainer/>
        </div>);
    }
}

export default Menu;