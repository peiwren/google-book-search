//Cited: a few gitrepo
import React from "react";

// Delete button element and function
function DeleteBtn({ type = "default", className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={["btn btn-secondary btn-m", `btn-${type}`, className].join(
        " "
      )}
    >
      {children}
    </button>
  );
}

export default DeleteBtn;
