import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi 😊, My Name is Demi</h2>
        <div className="prompt">
          <p>A computer science student with a passion for learning and creating.</p>
          
          <a href="https://www.linkedin.com/in/demi-ogboye-a1b0782a9/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

          <a href="mailto:ogboye.demi@gmail.com">
            <EmailIcon />
          </a>

          <a href="https://github.com/HeavenRefiningDemonVenerable" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
