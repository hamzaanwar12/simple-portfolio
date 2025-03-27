import { div } from "framer-motion/client";
import React from "react";
import Typist from "react-typist-component";

function TypeWriter() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "MERN Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  return (
    <Typist
      typingDelay={70} // Faster typing speed (letters appear quicker)
      backspaceDelay={70} // Faster backspacing speed
      cursor={<span className="cursor">|</span>}
      loop
    >
      {roles.map((role, index) => (
        <React.Fragment key={index}>
          <span className="text-title font-bold font-2xl">
            {role}
          </span>
          <Typist.Delay ms={900} />
          <Typist.Backspace count={role.length} />
          <Typist.Delay ms={400} /> {/* Faster word transition */}
        </React.Fragment>
      ))}
    </Typist>
  );
}

export default TypeWriter;

//   Full Stack Developer
//   <Typist.Backspace count={21} />
//   <Typist.Delay ms={1000} />
//   Frontend Developer
//   <Typist.Backspace count={19} />
//   <Typist.Delay ms={1000} />
//   Backend Developer
//   <Typist.Backspace count={18} />
//   <Typist.Delay ms={1000} />
//   Software Engineer
//   <Typist.Backspace count={18} />
//   <Typist.Delay ms={1000} />
