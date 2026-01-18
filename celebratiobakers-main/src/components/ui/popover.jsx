import { useState } from "react";

export function Popover({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {children[0]} {/* PopoverTrigger */}
      </div>
      {open && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md p-2">
          {children[1]} {/* PopoverContent */}
        </div>
      )}
    </div>
  );
}

export function PopoverTrigger({ children }) {
  return children;
}

export function PopoverContent({ children }) {
  return <div className="absolute z-10 bg-white shadow-lg rounded-md">{children}</div>;
}
