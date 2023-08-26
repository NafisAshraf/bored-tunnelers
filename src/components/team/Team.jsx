import React from "react";
import Heading from "./Heading";
import Profile from "./Profile";
import teamData from "./teamData.json";

function Team(props) {
  return (
    <div className="container">
      {teamData.teams.map((team) => (
        <div className="bg-white rounded rounded-5" key={team.name}>
          <Heading heading={team.name} />

          <div className="row justify-content-center">
            {team.members.map((member) => (
              <div key={member.name} className="col-12 col-sm col-lg-3">
                <div className="mx-3">
                  <Profile
                    name={member.name}
                    image={member.image}
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
