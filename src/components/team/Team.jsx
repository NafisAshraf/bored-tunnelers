import React from "react";
import Heading from "./Heading";
import Profile from "./Profile";
import teamData from "./teamData.json";

function Team(props) {
  const names = [
    "Al Mominul Haque Badhan",
    "Abu Talha",
    "Nafis Ashraf",
    "Riyadh",
  ];
  return (
    <div className="container ">
      {/* <div className="row">
        <Heading heading="Electronics & Software Team" />

        {names.map((name) => (
          <div className="col">
            <div className="text-center mx-4" key={name}>
              <Profile name={name} />
            </div>
          </div>
        ))}
      </div> */}

      {teamData.teams.map((team) => (
        <div key={team.name}>
          <Heading heading={team.name} />

          <div className="row justify-content-center">
            {team.members.map((member) => (
              <div key={member.name} className="col-12 col-sm col-lg-3">
                <div className="mx-3">
                  <Profile
                    name={member.name}
                    university={member.university}
                    role={member.role}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
