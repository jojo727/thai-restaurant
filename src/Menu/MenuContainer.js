import React, { Component } from "react";
import data from "./menu-data.json";
import _ from "lodash";
//design the ALL DAY | LUNCH SPECIAL buttons at top
//scrollable menu with side buttons
//start working before talking to artemis...
var populate_section = (filtered_data, category) =>
    {return(filtered_data.filter(item => item.category === category).map((item) => {
        return(
        <div> 
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <text>{item.price}</text>
        </div>
        )}
    ))}
class MenuContainer extends Component{
    render(){
        const all_day_menu = data.filter(item => item.type==="All Day Menu")
        const lunch_specials = data.filter(item => item.type==="Lunch Special")
        
        //console.log(all_day_groups)
        //console.log(cats)
        return( //console.log("success")
            <div className="container">
                <div className="all-day">
                    <h2 className="menu-section">Appetizers</h2>
                    {populate_section(all_day_menu,"Appetizer")}
                    <h2>Soup</h2>
                    {populate_section(all_day_menu,"Soup")}
                    <h2>Beverages</h2>
                    {populate_section(all_day_menu,"Beverage")}
                </div>
                <div className="lunch-special">
                    <h2>Noodle And Fried Rice</h2>
                    {populate_section(lunch_specials,"Noodle And Fried Rice")}
                    <h2>Seafood</h2>
                    {populate_section(lunch_specials,"Seafood")}
                </div>
            </div>
        );
    }
}

export default MenuContainer;