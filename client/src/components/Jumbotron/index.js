import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron mt-10 w-full"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
