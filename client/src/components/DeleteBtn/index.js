import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Deletebtn(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <span className="delete-btn justify-content-center" {...props} role="button" tabIndex="0">
        <button style={{ marginBottom: 10 }} className="btn btn-danger">
          Delete
    </button>
        {/* save   */}
        {/* {this.opena ? 'Hide' : 'Show'} */}
      </span>
    </div>
  );
}

export default Deletebtn;
