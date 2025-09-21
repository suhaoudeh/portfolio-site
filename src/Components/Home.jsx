// Components/Home.jsx
import { Link } from "react-router-dom";
import logo from '../assets/logo1.png';
export default function Home() {
  return (
       <>
      
      <div className="home-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to My Portfolio</h1>

      <p>
        Hello! My name is Suha, and this is my personal portfolio website.
      </p>

      <p>
        This website showcases my skills, projects, education, and services. 
        It is a space where I can share what I am learning, the work I am proud of, 
        and my journey as a web developer.
      </p>

      <p>
        I created this portfolio not only to display my work but also to reflect 
        my growth, express my passion for learning new technologies, and 
        connect with like-minded professionals.
      </p>

      <p>
        I am truly grateful for the opportunities to learn and improve my skills, 
        and I hope this portfolio demonstrates my dedication and enthusiasm.
      </p>

      <Link to="/about">
        <button className="btn">Learn More About Me</button>
      </Link>
    </div>
    
    
  
    </>
  );
}
