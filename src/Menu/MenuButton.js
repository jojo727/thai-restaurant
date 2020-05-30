import React from "react";

export const MenuButton = (props) => 
(
    <button className="menu-button"
                        onMouseDown={props.handleMouseDown}>
                        {props.name}</button>
)