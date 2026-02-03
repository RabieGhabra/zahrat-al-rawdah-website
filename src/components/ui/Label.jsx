import React from "react";
import "../../assets/styles/Input_Label.css";
const Label = React.forwardRef(({ className = "", ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={`label ${className}`}
            {...props}
        />
    );
});
Label.displayName = "Label";
export default Label;
