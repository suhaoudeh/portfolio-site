// Components/About.jsx
import resumePDF from "../assets/Suha_Oudeh_Resume.pdf";
import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="about-text">
        <p>
          Hello! My name is <strong>Suha Oudeh</strong>. I am a passionate web developer 
          currently studying Software Engineering at Centennial College. 
          I love learning new technologies and building projects that make an impact.
        </p>

        <p>
          I have a diverse educational background, including a Bachelor in TI, Office Administration Certificate, 
          and a Diploma from Adult High School in Canada. I also completed high school in Palestine with an A+ grade.
        </p>

        <p>
          This portfolio showcases my skills, projects, services, and education. 
          I created it to demonstrate my growth as a developer and connect with potential collaborators or employers.
        </p>

        <p>
          I am grateful for the opportunities to learn and improve my skills, 
          and I hope this portfolio reflects my dedication and enthusiasm.
        </p>
         <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}
