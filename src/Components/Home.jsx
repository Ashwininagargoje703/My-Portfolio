import { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "./Home.css";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Resume from "./Resume/AshwiniResume.pdf";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#resume-button-1",
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        fontSize={"1.3rem"}
        gap={{ base: "4", md: "6", lg: "8" }}
        marginBottom={["40px", "0px", "0px"]}
      >
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={5}
        >
          <Heading
            id="user-detail-name"
            fontSize={"2rem"}
            textAlign={"start"}
            fontFamily={"Neue Machina"}
          >
            Hi I am Mohd Shahnawaz
          </Heading>
          <Text fontSize={"1.4rem"} textAlign={"start"}>
            <Typewriter
              options={{
                strings: ["Full stack web developer", "Software developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Text textAlign={"start"} fontSize={"1.1rem"}>
            I am an experienced & Highly skilled Full Stack MERN Developer with
            expertise in MongoDB, Express.js, React, and Node.js. Proficient in
            developing scalable and secure web applications with a strong focus
            on performance. Experienced in integrating Web3 technologies,
            including MetaMask and WalletConnect, with blockchain expertise..
          </Text>
          <Flex gap={"8"} align="center">
            <Button
              width="max-content"
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1GHjBaSgCKpSB73A50-bNVYulySYCpWNx?usp=sharing",
                  "_blank"
                );
              }}
              _hover={{
                transform: "scale(1.1)",
                transition: "all 0.3s ease-in-out",
              }} // Adds hover effect
              _active={{ transform: "scale(0.9)" }}
              _focus={{ boxShadow: "outline" }}
              bgGradient="linear-gradient(135deg, #3ab5b0 0%, #3d99be 31%, #56317a 100%)" // Gradient background
              color="white" // Text color
              p="3" // Padding for larger clickable area
              borderRadius="md" // Rounded corners
              _hover={{
                bgGradient:
                  "linear-gradient(135deg, #3ab5b0 0%, #3d99be 31%, #56317a 100%)", // Reverse gradient on hover
                transform: "scale(1.05)", // Slight scale on hover
                transition: "all 0.3s ease-in-out",
              }}
            >
              <a
                id="resume-link-1"
                href="https://your-resume-link.com/AshwiniResume.pdf"
                target="_blank"
                download="AshwiniResume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml="2">
                <AiOutlineDownload fontSize="1.2rem" />
              </Text>
            </Button>
            {/* "https://drive.google.com/drive/folders/1GHjBaSgCKpSB73A50-bNVYulySYCpWNx?usp=sharing" */}

            <Flex gap="3">
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/ashwini-nagargoje-259b5122b/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-github"
                href="https://github.com/Ashwininagargoje703"
                isExternal
              >
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-email"
                href="https://ashwininagargoje703@gmail.com"
                isExternal
              >
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Link href="#about" className="nav-link about">
              <Flex align={"center"} gap="2">
                <span>
                  <BsMouse fontSize={"1.4rem"} />
                </span>
                <Text>scroll down</Text>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Box
          data-aos="fade-up-left"
          height={{ base: "200px", md: "300px", lg: "400px" }}
          overflow="hidden"
          className="profile"
        >
          <Image
            className="animated-image"
            src="https://www.alwin.io/images/wazirx/banner_img.webp"
            borderRadius="1.5rem"
            height="100%"
            marginTop={"5px"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
