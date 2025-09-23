import React from "react";
import service1Img from "../assets/service1.png"; // volunteer image
import service2Img from "../assets/service2.png"; // web development image
import service3Img from "../assets/service3.png"; // problem solving image

export default function Service() {
  const services = [
    {
      id: 1,
      name: "Community Volunteer",
      image: service1Img,
      description:
        "I volunteer at our community to help newcomers with registration forms and provide translation support to help them fill up the documents.",
    },
    {
      id: 2,
      name: "Web Development",
      image: service2Img,
      description:
        "I create modern and responsive websites anytime, tailored to individual or business needs.  ",
    },
    {
      id: 3,
      name: "Problem Solving",
      image: service3Img,
      description:
        "Offer problem solving in areas such as coding, database management, and other technical challenges. ",
    },
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.name}
              className="service-img"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
