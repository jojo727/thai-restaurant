import React, { Component } from "react";

class MenuButton extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <button className="menu-button"
                        onMouseDown={this.props.handleMouseDown}>
                        {this.props.name}</button>
        );
    }
}

export default MenuButton;