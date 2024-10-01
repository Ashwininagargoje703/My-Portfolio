import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Edu.css";
import { Card } from "@chakra-ui/react";
export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "15px" }}
      >
        EXPERIENCE & EDUCATION
      </h1>
      <div class="timeline">

      <div class="container right">
          <Card s  bgGradient="linear(to-r, rgba(58, 181, 176, 0.7), rgba(61, 153, 190, 0.7))">
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Developer and Web3</h2>
              <h3>BlockMagix Bengaluru, Karnataka, India</h3>
              <p>Jan 2024 - Present  </p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card s  bgGradient="linear(to-r, rgba(58, 181, 176, 0.7), rgba(61, 153, 190, 0.7))">
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web Developer </h2>
              <h3>BuyUme New Delhi, NCR</h3>
              <p>July 2022 - Feb 2024, </p>
            </div>
          </Card>
        </div>
        <div class="container right">
          <Card s  bgGradient="linear(to-r, rgba(58, 181, 176, 0.7), rgba(61, 153, 190, 0.7))">
            <div class="content" data-aos="flip-down">
              <h2>Full Stack Web Developement</h2>
              <h3>Masai School</h3>
              <p>Oct 2021 - June 2022</p>
            </div>
          </Card>
        </div>
        <div class="container left">
          <Card >
            <Card  bgGradient="linear(to-r, rgba(58, 181, 176, 0.7), rgba(61, 153, 190, 0.7))">
              <div class="content" data-aos="flip-up">
                <h2>BTech in Computer Science Engineering</h2>
                <h3> Dr. A.P.J. Abdul Kalam Technical University (AKTU)</h3>
                <p> 2019</p>
              </div> 
            </Card>
          </Card>
        </div>
    
      </div>
    </div>
  );
}
