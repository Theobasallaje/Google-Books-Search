import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <span className="save-btn justify-content-center" {...props} role="button" tabIndex="0">
        <button style={{ marginBottom: 10 }} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          save
    </button>
        {/* save   */}
        {/* {this.opena ? 'Hide' : 'Show'} */}
      </span>
    </div>
  );
}

export default SaveBtn;
