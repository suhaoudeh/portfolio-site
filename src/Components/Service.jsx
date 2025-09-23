import React from "react";
import service1Img from "../assets/service1.jpeg"; // volunteer image
import service2Img from "../assets/service2.jpg"; // web development image
import service3Img from "../assets/service3.png"; // problem solving image

export default function Service() {
  const services = [
    {
      id: 1,
      name: "Community Volunteer",
      image: service1Img,
      description:
        " I volunteer at our community to help newcomers with registration forms and provide translation support to help them fill up the documents. willing to help in any way I can. ", 
    },
    {
      id: 2,
      name: "Web Development",
      image: service2Img,
      description:
        "I create modern and responsive websites anytime, tailored to individual or business needs. I use technologies like HTML, CSS, JavaScript, and React to build user-friendly and visually appealing websites. i ensure the websites are optimized for performance and accessibility.",
    },
    {
      id: 3,
      name: "Problem Solving",
      image: service3Img,
      description:
        "Offer problem solving in areas such as coding, database management, and other technical challenges.I enjoy tackling complex problems and finding efficient solutions. Also, I am always eager to learn new technologies and improve my skills.",
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
