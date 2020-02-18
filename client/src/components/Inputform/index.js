import React from "react";
import "./style.css";

// All of the props passed to the input element
export function Inputform(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Sets the type, className, children and onClick props to the button element
export function SearchButton({
  type = "default",
  className,
  children,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "search btn btn-dark mt-3 mb-5",
        `btn-${type}`,
        className
      ].join(" ")}
    >
      {children}
    </button>
  );
}
