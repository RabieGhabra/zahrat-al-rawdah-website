import * as React from "react";
import "../../assets/styles/Select.css";
import Button from "./Button";
const Select = ({ children, value, onChange, ...props }) => {
  const clonedChildren = React.Children.map(children, (child) => {
    if (child.type?.displayName === "SelectItem") {
      return React.cloneElement(child, { selectedValue: value, onChange });
    }
    return child;
  });
  return <div className="select-root" {...props}>{clonedChildren}</div>;
};
const SelectTrigger = React.forwardRef(
  ({ className = "", children, onClick, ...props }, ref) => (
    <Button ref={ref} className={`select-trigger ${className}`} onClick={onClick} {...props}>
      {children}
    </Button>
  )
);
SelectTrigger.displayName = "SelectTrigger";
const SelectValue = ({ value, placeholder = "Select..." }) => {
  return <span className="select-value">{value || placeholder}</span>;
};
const SelectContent = React.forwardRef(
  ({ children, className = "", isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={`select-content ${className}`}
      style={{ display: isOpen ? "block" : "none" }}
      {...props}
    >
      {children}
    </div>
  )
);
SelectContent.displayName = "SelectContent";
const SelectItem = React.forwardRef(
  ({ children, value, selectedValue, onSelect, onChange, ...props }, ref) => {
    const { selectedValue: _ignore, ...rest } = props;
    return (
      <div
        ref={ref}
        className="select-item"
        {...rest}
        onClick={() => {
          onSelect?.(value);
          onChange?.(value);
        }}
      >
        {children}
        {selectedValue === value && <span className="select-item-indicator">✔</span>}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";
export default Select;
export { SelectTrigger, SelectValue, SelectContent, SelectItem };
