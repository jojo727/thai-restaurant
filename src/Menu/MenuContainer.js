import React, { Component } from "react";
import data from "./menu-data.json";
import _ from "lodash";

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
            <div className="Menu">
                <div className="all-day">
                    <h1>All Day Menu</h1>
                    <h2>Appetizers</h2>
                    {all_day_menu.filter(item => item.category === "Appetizer").map((item) => {
                        return(
                        <div> 
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <text>{item.price}</text>
                        </div>
                        )}
                    )
                    }
                    <h2>Soup</h2>
                    {/*populate_section(all_day_menu,"Soup")*/}
                    {all_day_menu.filter(item => item.category === "Soup").map((item) => {
                        return(
                        <div> 
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <text>{item.price}</text>
                        </div>
                        )}
                    )
                    }
                    <h2>Beverages</h2>
                    {populate_section(all_day_menu,"Beverage")}
                </div>
                <div className="lunch-special">
                    <h1>Lunch Specials</h1>
                    
                </div>
            </div>
        );
    }
}

export default MenuContainer;