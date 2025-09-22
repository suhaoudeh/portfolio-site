// Components/Project.jsx
import React from "react";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.JPEG";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "Web Portfolio",
      image: project1Img,
      description: "Built my personal portfolio website using React. Showcases my skills, projects, and education.",
    },
    {
      id: 2,
      name: "Online Store",
      image: project2Img,
      description: "Developed an e-commerce web app with product listings, cart, and checkout features.",
    },
    {
      id: 3,
      name: "Appointment System",
      image: project3Img,
      description: "Created an online appointment booking system for clinics with notifications and history tracking.",
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
