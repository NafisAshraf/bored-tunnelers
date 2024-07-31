// src/components/Other.js
import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Other = () => {
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        '*[_type == "other"]{..., "items": items[]{..., "logo": logo.asset->url}}'
      )
      .then((data) => {
        setOtherData(data[0]); // Assuming there is only one "other" document
      })
      .catch(console.error);
  }, []);

  if (!otherData) return <div>Loading...</div>;

  return (
    <div className="container-fluid bg-black text-white py-5 my-5 px-0 mx-0 ">
      {otherData.items.map((item, index) => {
        if (item._type === "textBlock") {
          return (
            <div key={index}>
              <div className="container d-flex justify-content-center align-items-center">
                <p className="fs-2 fw-bold">{item.text}</p>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="container d-flex justify-content-center">
        {otherData.items.map((item, index) => {
          if (item._type === "footerItem") {
            return (
              <>
                <div className="d-flex flex-column align-items-center justify-content-center p-3">
                  <div key={index} className="p-3">
                    <img style={{ width: "50px" }} src={item.logo} alt="Logo" />
                  </div>
                  <div>
                    <a href={item.link}>Link</a>
                  </div>
                </div>
              </>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Other;
