import React from "react";

function Heading(props) {
  return (
    <div className="my-5 text-center">
      <h1 className="display-5">{props.heading}</h1>
      <hr />
    </div>
  );
}

export default Heading;
