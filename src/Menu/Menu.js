import React, { Component } from "react";
import MenuContainer from "./MenuContainer"
//import "./Menu.scss"

class Menu extends Component{
    render(){
        return(
        <div className="menu">
            <MenuContainer/>
        </div>);
    }
}

export default Menu;