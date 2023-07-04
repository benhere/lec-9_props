import React from "react";

const heading = {
  fontSize: "75px",
  color: "maroon",
};

function Inline() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 style={heading}>Inline Styling</h1>
    </div>
  );
}

export default Inline;
