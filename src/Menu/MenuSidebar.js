import React, { Component } from "react";

class MenuSidebar extends Component{
    constructor(props, any){
        super(props);

        this.state={categoryDisplayed: "all-day"};
    }
    componentDidUpdate(){
        console.log(this.all_day);
    }
    render(){
        var all_day_styles = {
            display:this.state.all_day ? "inline-block":"none"
        };
        var lunch_styles = {
            display:this.state.all_day ? "none":"inline-block"
        };

    
        return(
            <div className="sidebar">
                <ul className="all-day" style={this.props.isVisible}>
                    <li>Appetizers</li>
                    <li>Soups</li>
                    <li>Beverages</li>
                </ul>

                <ul className="lunch" style={lunch_styles}>
                    <li>Noodle and Fried Rice</li>
                    <li>Seafood</li>
                </ul>
            </div>
        );
    }
}

export default MenuSidebar;
/*
            */