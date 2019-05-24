import React from "react";

const Placeholder = ({height, placeholderText}) => (
  <div
    style={{
      background: "#f4b042",
      height,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {placeholderText}
  </div>
);

export default Placeholder;