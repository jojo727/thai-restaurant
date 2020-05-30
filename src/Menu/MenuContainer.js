import React, { Component } from "react";
import { MenuButton } from "./MenuButton";
import data from "./menu-data.json";
import MenuSidebar from "./MenuSidebar";
//import _ from "lodash";
//design the ALL DAY | LUNCH SPECIAL buttons at top
//scrollable menu with side buttons



let populate_section = (filtered_data, category) =>
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
    constructor(props){
        super(props);

        this.state = {
            all_day: false //shows all-day menu when true, lunch specials when false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.switchMenu = this.switchMenu.bind(this);
    };

    handleMouseDown = (element) => {
        this.switchMenu();
        console.log("switched");
        element.stopPropagation();
    }
    switchMenu = () => {
        console.log(this.state.all_day);
        this.setState({
            all_day: !this.state.all_day
        });
    }
    componentDidUpdate(){console.log(this.state.all_day)};
    render(){
        const all_day_menu = data.filter(item => item.type==="All Day Menu")
        const lunch_specials = data.filter(item => item.type==="Lunch Special")
        
        //console.log(all_day_groups)
        //console.log(cats)
        return( //console.log("success")
            <div className="menu-container">
                <MenuButton name={"All Day Menu"} handleMouseDown={this.handleMouseDown}/>
                <MenuButton name={"Lunch Specials"} handleMouseDown={this.handleMouseDown}/> 
                <MenuButton name={"Beverages & Desert"} handleMouseDown={this.handleMouseDown}/>
                <MenuSidebar displayingAllDay={this.state.all_day}/>
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