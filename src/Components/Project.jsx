// Components/Project.jsx
import React from "react";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.jpeg";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "Frank Team Inc Website",
      image: project1Img,
      description: " Designed and developed a responsive website for Frank Team Inc using React and CSS. Implemented features such as a project gallery, contact form, and team member profiles. ",
    },
    {
      id: 2,
      name: "Wedding Planner website ",
      image: project2Img,
      description: " Developed a wedding planning website with features for managing events, guests, and vendors.",
    },
    {
      id: 3,
      name: " Appointment Booking System for real estate agents",
      image: project3Img,
      description: " Created an appointment booking system tailored for real estate agents, featuring property listings, client management, and appointment scheduling.",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-img" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
