import React from "react";

function Heading(props) {
  return (
    <div className="my-5 pt-3 text-center">
      {/* <h1 className="display-5">{props.heading}</h1> */}
      <h1
        className=""
        style={{
          fontSize: 50,
          fontWeight: 700,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {props.heading}
      </h1>
      <hr className=" mx-auto" style={{ width: "90%" }} />
    </div>
  );
}

export default Heading;
