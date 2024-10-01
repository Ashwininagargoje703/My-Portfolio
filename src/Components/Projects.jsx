import React, { useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Horizontal scroll animation using GSAP
    let sections = gsap.utils.toArray(".project-card");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3000",
      },
    });
  }, []);

  let projectsarr = [
    {
      anim: "flip-right",
      image: "https://i.ibb.co/THBCyNW/game.jpg",
      name: "GameOcrat",
      dis: "GameOcrat Project Web3 nd Gaming",
      tstack: "Web3  | JavaScript | ReactJS| NodeJS | CSS",
      github: "https://gameocrat.netlify.app/",
      link: "https://gameocrat.netlify.app/",
    },

    {
      anim: "flip-right",
      image:
        "https://raw.githubusercontent.com/shahnawaz8/shahnawaz8/master/Screenshot%20(89).png",
      name: "eBay Clone",
      dis: "An ecommerce website to purchase a wide range of products.",
      pro: "Group Project (5 Members)",
      tstack: "Web3  | JavaScript | ReactJS| NodeJS | CSS",
      github: "https://github.com/Sweta-Swarnakar/ebay-clone",
      link: "https://sweta-swarnakar.github.io/ebay-clone/",
    },

    {
      anim: "flip-right",
      image:
        "https://raw.githubusercontent.com/nikhilsingh38/Booking.com_clone/master/products/src/Components/search.PNG",
      name: "Booking.com",
      dis: "Booking.com a global travel focused on simplifying global travel experiences.",
      pro: "Group Project (5 Members)",
      tstack: "JavaScript | ReactJS | NodeJS | CSS | EDC",
      github: "https://github.com/nikhilsingh38/Booking.com_clone",
      link: "https://booking-com-clone-seven.vercel.app/",
    },

    {
      anim: "flip-right",
      image:
        "https://raw.githubusercontent.com/mangeshniras/meesho_fw_13/main/Screenshot%20(87).png",
      name: "Meesho Clone",
      dis: "An e-commerce website for users to buy and sell products.",
      pro: "Group Project (5 Members)",
      tstack: "ReactTs | TypeScript | Tailwind CSS | RestFull API",
      github: "https://github.com/mangeshniras/meesho_fw_13",
      link: "https://ecommarce-web-site.vercel.app/",
    },

    {
      anim: "zoom-in",
      image:
        "https://i.ibb.co/XsGpDzw/Whats-App-Image-2023-10-26-at-1-56-40-PM.jpg",
      name: "Hiring Farm",
      dis: "Hiring Farm is a job platform for job seekers and employers, offering the ability to postand apply for positions.",
      pro: "Group Project (2 Members)",
      tstack: "ReactJs | HTML | CSS | JS | Axios | MUI | Node.JS | MongoDB",
      github: "https://hiringfarm.online/",
      link: "https://hiringfarm.online/",
    },
    {
      anim: "zoom-in",
      image:
        "https://i.ibb.co/37cGy8D/Whats-App-Image-2023-10-07-at-12-56-54-PM.jpg",
      name: "Flower Store",
      dis: "Clone is online marketplace for buying and selling floral products, simplifying the flower commerce experience",
      pro: "Group Project (5 Members)",

      tstack: "React | Tailwind CSS | JSON | Axios | React-Router-Dom",
      github: "https://github.com/GOVIND-01/flowershop",
      link: "https://onlineflowershop.netlify.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://miro.medium.com/v2/resize:fit:700/1*66H2nLY6660d5QXsJVysJQ.png",
      name: "Shop.com Clone",
      dis: "This is a clone if The Bowl Company which is about dishes offered by swiggys new platform that offers food in a special Bowl",
      pro: "Group Project (5 Members)",
      tstack: "HTML | CSS | JavaScript | NodeJS | Bootstrap",
      github: "https://github.com/shahnawaz8/shop.com-Clone",
      link: "https://github.com/shahnawaz8/shop.com-Clone",
    },

    {
      anim: "flip-right",
      image:
        "https://i.ibb.co/vJByf9B/Whats-App-Image-2023-10-07-at-8-33-40-PM.jpg",
      name: "Weather App",
      dis: "A simple App which is used for Seven Day forcasting weather and location.Also add tempterature and wind Speed.",
      pro: "Individual",
      tstack: "HTML | CSS | JavaScript | NodeJS | Bootstrap",
      github: "https://weather-search-psi.vercel.app",
      link: "https://weather-search-psi.vercel.app/",
    },
  ];

  return (
    <DIV ref={containerRef} id="projects" className="about section">
      <Text fontSize="4xl" mb={8} >PROJECTS</Text>
      <Flex className="projects" overflow="hidden">
        {projectsarr.map((ele, i) => (
          <Box className="project-card" key={i} borderRadius="15px" boxShadow="md">
            <Box className="pro-img">
              <img src={ele.image} alt="pro_img" />
            </Box>
            <Box className="pro-dis" p={4}>
              <Text fontSize="2xl" fontWeight="bold">{ele.name}</Text>
              <Text fontSize="md" mb={2}>{ele.dis}</Text>
              <Text fontSize="sm" color="gray.500">{ele.pro}</Text>
              <Text fontSize="sm" color="gray.400">{ele.tstack}</Text>
              <Flex className="dep-btn" mt={4} gap={4}>
                <a href={ele.github} target="_blank" rel="noreferrer" className="icon-link">
                  <FaGithub />
                </a>
                <a href={ele.link} target="_blank" rel="noreferrer" className="icon-link">
                  <FaExternalLinkAlt />
                </a>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </DIV>
  );
}

const DIV = styled.div`
  .projects-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
  }

  .projects {
    display: flex;
    flex-wrap: nowrap;
  }

  .project-card {
    min-width: 33.33vw;
    min-height: 13rem;
    max-height:100%;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    z-index: 1;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid rgba(61, 153, 190, 0.7);
    backdrop-filter: blur(10px);
    transform-style: preserve-3d;
  }

  .project-card:hover {
    transform: rotateY(15deg) translateZ(10px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  }

  .pro-img img {
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width: 100%;
    height:200px;
    transform: translateZ(30px);
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
  }

  .project-card:hover .pro-img img {
    transform: translateZ(60px) scale(1.05);
  }

  .pro-dis {
    padding-top: 20px;
  }

  .project-title,
  .project-description {
    font-size: 1.2rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .project-tech-stack {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #ccc;
  }

  .dep-btn {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 20px;
  }

  .icon-link {
    font-size: 1.5rem;
    color: gray;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .icon-link:hover {
    transform: scale(1.2);
    color: #3ab5b0;
  }

  @media screen and (max-width: 768px) {
    .project-card {
      min-width: 100vw;
    }
  }
`;
