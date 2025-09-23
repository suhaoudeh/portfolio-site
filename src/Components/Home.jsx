// Components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
       <>
      
      <div className="home-container">
        
        <h1>Welcome to My Portfolio</h1>

      <p>
        Hello! My name is Suha, and this is my personal portfolio website.
      </p>

      <p>
        This website showcases my skills, projects, education, and services. 
        It is a space where I can share what I am learning, the work I am proud of, 
        and my journey as a web developer. So far, I am studying Software Engineering at Centennial College. Take a look around to see what I've been working on!
        It's my way of demonstrating my growth as a developer and connecting with potential collaborators or employers. 
      </p>

      <p>
        I created this portfolio not only to display my work but also to reflect 
        my growth, express my passion for learning new technologies, and 
        connect with like-minded professionals.  And I am always excited to collaborate on new projects! 
      </p>

      <p>
        I am truly grateful for the opportunities to learn and improve my skills, 
        and I hope this portfolio demonstrates my dedication and enthusiasm.
        Also, I hope you find it engaging and informative!
      </p>

      <Link to="/about">
        <button className="btn">Learn More About Me</button>
      </Link>
    </div>
    
    
  
    </>
  );
}
