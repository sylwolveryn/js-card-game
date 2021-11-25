import React from "react"
import "./HexaGrid.css"

export const HexaGrid = ({numberOfGridElements}) => {
    const gridElements = [];
    for (let index = 0 ; index < numberOfGridElements ; index++) {
        gridElements.push(<div></div>);
    }
    return (
        <div className="main">
            <div className="container">
                {gridElements}
            </div>
        </div>
    )
}
