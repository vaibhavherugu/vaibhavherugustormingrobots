import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 10000 });
  }, []);
  return (
    <div>
      <h1 className="header3" data-aos="fade-left">
        My Project
      </h1>
      <p className="text" data-aos="fade-right">
        The problems and solutions of this project are very few, considering we
        only had a week to work on it. The first problem was that when I tried
        to use the ultrasonic sensor, it didn't really detect one wall-it
        detected all of them and gave many readings. To solve this, I switched
        to touch sensor. Anonther problem was that the robot kept getiing stuck
        in an area. This happened several times, so I adjusted the maze
        accordingly. The last problem was that the robot sometimes hit walls and
        crashed, but other times it did not. I have not solved this.
      </p>
      <p className="text" data-aos="fade-left">
        Some interesting technical facts are that I used the touch sensor to
        detect when it hits a wall instead of using an ultrasonic sensor. At
        first glance, an ultrasonic sensor seems to be the best choice. But when
        you actually try to detect walls on the mazae, it doesn't work. I had to
        use the touch sensor, but this led to a minor drawback. The drawback was
        that the robot had to hit the wall before turing. Also, another
        techincal fact is that the code is very simple. You just have to do a
        touch sensor detection and a turn. But the main problem is you need to
        do a lot of testing.
      </p>
      <p className="text" data-aos="fade-right">
        This project took 10 weeks. This is because for the first nine weeks, we
        learned some things like motor encoders and pen drawing robots. But for
        the second last week, we actually worked on the project but on the last
        we did the presentation.
      </p>
      <p className="text" data-aos="fade-right">
        Although the ultrasonic sensor did not work, I am curios to learn if it
        could. If it works, then it would work tremendously better than the
        touch sensor, because it would be able to detect the walls and not hit
        them.
      </p>
      <div className="video">
        <iframe
          data-aos="fade-left"
          width="600"
          height="500"
          src="https://www.youtube.com/embed/UweykMeCaZY"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
