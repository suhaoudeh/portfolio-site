import {Link, Router } from 'react-router-dom';

export default function Layout() {

    return (
        <> 
         <h1>My Portfolio </h1>
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> | {" "}
            <Link to="/contact">Contact</Link> | {" "}
            <Link to="/education">Education</Link> | {" "}
            <Link to="/projects">Projects</Link> | {" "}
            <Link to="/service">Services</Link> | {" "} 
        </nav>
        

        </>
    )
}
