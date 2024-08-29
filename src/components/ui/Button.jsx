import React from 'react'
function Button({ children, textOnly, className, ...props }) {
    let cssClass = textOnly ? `text-button ${className}` : "button";
    return (
        <button className={cssClass} {...props}>{children}</button>
    )
}
export default Button