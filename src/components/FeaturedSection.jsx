import React from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedSection = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="row">
          {props.items.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <FeaturedItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
