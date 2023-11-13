import React from "react";
import Heading from "./Heading";
import Profile from "./Profile";
import teamData from "./teamData.json";
import "../header.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TeamMember({ member }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow triggering multiple times
  });

  const popOutVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="col-12 col-sm col-lg-3" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={popOutVariants}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-3">
          <Profile
            name={member.name}
            image={member.image}
            university={member.university}
            role={member.role}
          />
        </div>
      </motion.div>
    </div>
  );
}

function Team(props) {
  return (
    <div className="bg-white below-header">
      <div className="container pt-sm-2">
        {teamData.teams.map((team) => (
          <div className="bg-white rounded rounded-5" key={team.name}>
            <Heading heading={team.name} />

            <div className="row justify-content-center">
              {team.members.map((member) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
