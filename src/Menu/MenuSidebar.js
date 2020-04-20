import React, { Component } from "react";

class MenuSidebar extends Component{
    constructor(props, any){
        super(props);

        this.state={all_day: true};
    }
    render(){
        let all_day_styles = {
            display:(this.state.all_day ? "inline-block":"none")
        }      

        let lunch_styles = {
            display:(this.state.all_day ? "none":"inline-block")
        }

        return(
            <div className="sidebar">
                <ul className="all-day" style={all_day_styles}>
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