import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10000 });
  }, []);
  return (
    <div>
      <h1 className="header2" data-aos="fade-left">
        ABOUT ME
      </h1>
      <p className="text" data-aos="fade-right">
        I am a fifth grader from New Jersey. I go to Frank Defino Central
        Elementary School. Some of my hobbies are piano, programming and
        reading. I was told during the second-last class that we were allowed to
        create our own challlenges for the last class. I decided to do a maze
        challenge.
      </p>
    </div>
  );
};

export default About;
