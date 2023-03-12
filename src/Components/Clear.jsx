import React from "react";
import '../StyleSheets/Clear.css';

const ClearButton = (props) =>(
    <div className="clear-btn"
    onClick={() => props.manageClear()}>
        {props.children}
    </div>
)

export default ClearButton;