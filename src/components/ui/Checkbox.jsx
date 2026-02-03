import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import cn from "../../lib/utils";
const Checkbox = React.forwardRef(
  ({ className, size = 20, ...props }, ref) => {
    const markSize = size * 0.5;
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer relative flex shrink-0 items-center justify-center rounded-sm border border-primary bg-white overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              width: markSize,
              height: markSize,
              backgroundColor: "currentColor",
              clipPath:
                "polygon(20% 50%, 5% 65%, 45% 100%, 100% 20%, 80% 5%, 45% 65%)",
              transform: "translateX(-1px)",
            }}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = "Checkbox";
export default Checkbox;
