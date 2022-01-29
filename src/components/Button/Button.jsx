import React from "react";

import './Button.css';

const Button = ({children}) => {
    return (
        <button className="component-button">{children}</button>
    )
}

export default Button;