import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  let projectsarr = [
    {
      anim: "zoom-in",
      image:
        "https://i.ibb.co/XsGpDzw/Whats-App-Image-2023-10-26-at-1-56-40-PM.jpg",
      name: "Hiring Farm",
      dis: "Hirning Farm is a job platform for job seekers and employers, offering the ability to postand apply for positions.",
      pro: "Individuel - Project",
      tstack: "ReactJs,HTML,CSS,JS,Axios,MUI, Node.JS",
      github: "https://github.com/Ashwininagargoje703/Vampire-coders",
      link: "https://hiringfarm.online/",
    },
    {
      anim: "zoom-in",
      image:
        "https://i.ibb.co/CbhNJvL/Whats-App-Image-2023-12-17-at-4-39-31-PM.jpg",
      name: "Fruits Store",
      dis: "A responsive fruit store with dynamic product filtering and sorting using ReactJs, Tailwind CSS, and JavaScript.",
      pro: "Individuel - Project",
      tstack: "React, Tailwind CSS, JSON, Axios,React-Router-Dom",
      github: "https://github.com/Ashwininagargoje703/Fruits-Store",
      link: "https://fruits-store-three.vercel.app/",
    },
    {
      anim: "flip-right",
      image: "https://i.ibb.co/mcpKr1N/meeshoo.png",
      name: "Meesho Clone",
      dis: "Meesho is a online Shopping & Reselling site in India - Buy & Sell best quality Fashion, Electronics, Home & Kitchen products at lowest prices",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,JavaScript,jQuryBootstrap",
      github: "https://github.com/Ashwininagargoje703/Meesho_clone/",
      link: "https://meesho-clone-gold.vercel.app",
    },
    {
      anim: "flip-right",
      image: "https://i.ibb.co/RpHJXfj/TheBowl.png",
      name: "TheBowlCompany Clone",
      dis: "This is a clone if The Bowl Company Which is about Dishes offered by Swiggys new platform that offers food in a special Bowl",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,JavaScript,Bootstrap",
      github: "https://github.com/MadhanM282/the-bowl-company",
      link: "https://the-bowl-company.vercel.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://raw.githubusercontent.com/Ashwininagargoje703/Urbonic/master/uboric.png",
      name: "Urboni-Clone",
      dis: "An e-commerce website for users to buy and sell products.",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,JS",
      github: "https://github.com/Ashwininagargoje703/Urbonic",
      link: "https://urbonic.vercel.app/",
    },
    {
      anim: "flip-right",
      image: "https://i.ibb.co/txpKKTc/weather.png",
      name: "Weather-App Google map",
      dis: "A simple App which is used for Seven Day forcasting  weather and location.Also add tempterature and  wind Speed.",
      pro: "Individuel - Project",
      tstack: "HTML, CSS, JS",
      github: "https://github.com/Ashwininagargoje703/Weather.gi",
      link: "https://elegant-jones-1248a2.netlify.app/",
    },

    {
      anim: "zoom-in",
      image: "https://i.ibb.co/sRVqwqW/mc-donald.png",
      name: "McDonald-App",
      dis: "A food app here you can search and add foods this page build using html css advace js",
      pro: "Group - Project",
      tstack: "React,Axios,React-Router-Dom,Redux,Node.js,MongooDB,Telwind CSS",
      github: "https://github.com/VivekTomar03/FitnessFuel",
      link: "https://frontend-iota-blond.vercel.app/",
    },
  ];

  return (
    <DIV className="top" id="projects">
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        PROJECTS
      </h1>

      <div>
        {projectsarr.map((ele, i) => (
          <div className="animation project-card" data-aos={ele.anim}>
            <div className="pro-img">
              <img src={ele.image} data-aos="fade-up-right" alt="pro_img" />
            </div>
            <div className="pro-dis">
              <h1 className="title-pro project-title">{ele.name}</h1>
              <h1 className="project-description">
                {ele.dis}
                <span style={{ fontSize: "1rem", color: "teal" }}>
                  {ele.pro}
                </span>
              </h1>

              <h2
                style={{ fontSize: "1rem", color: "red" }}
                className="project-tech-stack"
              >
                {ele.tstack}
              </h2>
              <div className="dep-btn">
                <Button data-aos="fade-down-right">
                  <a
                    className="project-github-link"
                    href={ele.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </Button>
                <Button data-aos="fade-down-left">
                  <a
                    className="project-deployed-link"
                    href={ele.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;
  .animation {
    width: 50%;
    height: 100%;
    margin: 20px auto;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;

    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
  }
  /* .animation:hover {
    width: 55%;
    border-radius: 20px;
  } */
  .proj-title {
    font-size: 3rem;
    margin: 5px 0;
  }
  .title-pro {
    font-size: 1.6rem;
  }
  .animation div {
    width: 50%;
  }
  .pro-dis {
    text-align: center;
    justify-content: center;
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .dep-btn {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px auto;
  }
  img {
    border-radius: 10px;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  img:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    width: 90%;
    margin: auto;
    .animation {
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      width: 100%;
    }
    .proj-title {
      /* font-size: 1rem; */
      /* margin: 5px 0; */
    }
    .title-pro {
      font-size: 1rem;
    }
    .pro-img {
      width: 95% !important;
    }
    .pro-img img {
      width: 100%;
    }
    .animation:hover {
      width: 100%;
      border-radius: 20px;
    }
    .pro-dis {
      line-height: 1.2;
      font-size: 0.7rem;
    }
  }
`;
// {
//   anim: "",
//   image: "",
//   name: "",
//   dis: "",
//   pro: "",
//   tstack: "",
//   github: "",
//   link: "",
// },
