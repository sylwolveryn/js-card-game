import React from "react"
import "./HexaMap.css"

// TODO based on this article https://ninjarockstar.dev/css-hex-grids/
export const HexaMap = ({numberOfGridElements}) => {
    const gridElements = [];
    for (let index = 0 ; index < numberOfGridElements ; index++) {
        gridElements.push(
        <li class="hex-grid__item">
            <div class="hex-grid__content"> {index} </div>
        </li>);
    }

    return (
        <ul class="hex-grid__list">
            {gridElements}
        </ul>
    )
}


