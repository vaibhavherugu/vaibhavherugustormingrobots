import React, { useEffect } from "react";
import "./Home.css";
import img from "./assets/Course.jpg";
import img2 from "./assets/Maze.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10000 });
  }, []);
  return (
    <div className="body">
      <div className="headerdiv">
        <h1 data-aos="fade-up" className="header">
          THE MAZE CHALLENGE
        </h1>
        <h1 data-aos="fade-down" className="footer">
          Website and Challenge Created and Programmed by Vaibhav Herugu
        </h1>
      </div>
      <h1 className="footer2" style={{ fontSize: 40 }}>
        What is the Maze Challenge?
      </h1>
      <div className="fadeinimgdiv">
        <img
          data-aos="fade-right"
          src={img2}
          alt="Maze"
          className="fadeinimg"
        />
        <p data-aos="fade-left" className="fdrtext">
          The Maze Challenge is a challenge to test your knowledge of the touch
          sensor. It is a small, simple maze, but the robot has to make it to
          two of the stop tiles in the maze to beat the challenge. The maze is
          not a complicated one-it is extremely easy, designed to help the robot
          navigate using only the touch sensor. The maze is also a very small
          maze that will not take much time for the robot to go through. The
          creator of this maze, Vaibhav Herugu, has also made some other RVW
          projects.
        </p>
      </div>
      <div className="fadeinimgdiv">
        <p className="fdrtext2" data-aos="fade-right">
          The Maze Challenge is a simple course.The image on the right is the
          full course. When the robot hits a wall, it turns left and keeps going
          forward until it hits another wall, and does the same thing. It does
          this until it reaches the first stop tile, where the code
          automatically stops. But it must be manually restarted and rerun until
          it reaches the second stop tile, in which case the challenge is
          finsihed.
        </p>
        <img data-aos="fade-left" src={img} alt="Maze" className="fadeinimg2" />
      </div>
      <div className="bottom">
        <a href="/" className="nav">
          Home
        </a>
        <p className="nav"> | </p>
        <a href="/Project" className="nav">
          My Project
        </a>
        <p className="nav"> | </p>
        <a href="/About" className="nav">
          About
        </a>
      </div>
    </div>
  );
};

export default Home;
