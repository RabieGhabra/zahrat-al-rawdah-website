import React from "react";
export const Button = ({ variant = "default", size = "md", children, ...props }) => {
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;
    return (
        <button className={`button ${variantClass} ${sizeClass}`} {...props}>
            {children}
        </button>
    );
};
export default Button;
