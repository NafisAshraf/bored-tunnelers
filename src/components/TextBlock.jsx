import React from "react";

const TextBlock = ({ title, titleColor, text, textColor }) => {
  // Log the titleColor to check its structure
  console.log(titleColor);

  // Assume titleColor is an object with a hex or RGB value under a `hex` or `rgb` property
  const titleColorHex = titleColor?.hex || titleColor?.rgb || "#000000";
  const textColorHex = textColor?.hex || textColor?.rgb || "#000000";

  return (
    <div className="container py-3">
      {title && (
        <h1 className="dynamic-heading" style={{ color: titleColorHex }}>
          {title}
        </h1>
      )}

      {text && (
        <p className="dynamic-text text-black" style={{ color: textColor }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default TextBlock;
