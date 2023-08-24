import React from "react";

const profileImageStyle = {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
};

function Profile(props) {
  const image = "images/team/" + props.image;
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <img src={props.image} style={profileImageStyle} className="mb-3" />
      <h5 className="text-center">{props.name}</h5>
      <div className="text-center">
        <p className="mb-1">{props.university}</p>
        <p className="text-primary fw-semibold">{props.role}</p>
      </div>
    </div>
  );
}

export default Profile;
