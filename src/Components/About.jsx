import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        margin="auto"
        textAlign="center"
        id="about"
        className="about section"
      >
        About me
      </Text>
      <Flex
        height={{ base: "100%", md: "60vh", lg: "100%" }}
        width="85%"
        margin="auto"
        id="about"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        alignItems={"center"}
      >
        <Box
          data-aos="fade-right"
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginTop={"30px"}
        >
          <Image
            className="home-img"
            margin="auto"
            // border="1px solid grey"
            borderRadius="50%"
            boxShadow={"-2px -2px 5px #fff, 2px 2px 5px #babecc"}
            // src="https://www.alwin.io/images/wazirx/banner_img.webp"
            src="https://i.ibb.co/nsJ0CRC/ms.jpg"
          />
          {/* https://avatars.githubusercontent.com/u/106812942?v=4 */}
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
          fontSize={"1.3rem"}
          data-aos="fade-left"
        >
          Highly motivated Full Stack Developer with expertise in MERN stack
          (MongoDB, Express.js, React, Node.js). Passionate and diligent, with
          strong problem-solving skills and a dedication to continuous learning.
          Proficient in developing scalable, efficient, and secure backend
          solutions with Node.js and Express.js. Collaborative team player with
          excellent adaptability, enthusiasm, and positivity.
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about
