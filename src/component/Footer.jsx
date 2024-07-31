// src/components/Other.js
import React, { useState, useEffect } from "react";
import { sanityFetch } from "../sanityClient";

const Footer2 = () => {
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityFetch(`*[_type == "other"]`);
        console.log(data);
        setOtherData(data[0]); // Assuming there is only one "other" document
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!otherData) return <div>Loading...</div>;

  return (
    <div>
      {otherData.items.map((item, index) => {
        if (item._type === "footerItem") {
          return (
            <div key={index}>
              <img src={item.logo} alt="Logo" />
              <a href={item.link}>Link</a>
            </div>
          );
        }
        if (item._type === "textBlock") {
          return (
            <div key={index}>
              <p>{item.text}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Footer2;
