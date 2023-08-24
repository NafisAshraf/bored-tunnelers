import React from "react";
import cat from "../../images/team/cat.jpg";

const profileImageStyle = {
  width: "130px",
  height: "130px",
  borderRadius: "50%",
};

function Profile(props) {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <img src={cat} style={profileImageStyle} className="mb-3" />
      <h5>{props.name}</h5>
      <div className="text-center">
        <p className="mb-1">{props.university}</p>
        <p className="text-primary fw-semibold">{props.role}</p>
      </div>
    </div>
  );
}

export default Profile;
