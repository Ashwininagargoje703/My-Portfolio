import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import "aos/dist/aos.css"; // Ensure you import AOS if you use it

const sliderData1 = [
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
    name: "JavaScript",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
    name: "ReactJs",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
    name: "Axios",
  },
  {
    image:
      "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    name: "Redux",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
    name: "Type-Script",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
    name: "Node.js",
  },
  {
    image:
      "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    name: "Express.js",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086972-9cb90d62-a556-474f-920f-aba5a0e9684d.png",
    name: "Mongo DB",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094909-ccb4d46c-a531-42e1-8d6a-300641127a91.png",
    name: "HTML",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
    name: "CSS",
  },
];

export default function Skills() {
  return (
    <DIV id="skills">
      <h1>Skills</h1>
      <div className="skill-section">
        <div className="skill-list" data-aos="fade-up">
          {sliderData1.map((el, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={el.image} alt={el.name} className="skill-image" />
              <Text>{el.name}</Text>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin: auto;
  margin-top: 10px;
  height: 100%;
  width: 90%;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 30px;
  }

  .skill-section {
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    display: inline-block;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .skill-card {
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 180px;
  
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.5),
      inset -2px -2px 8px rgba(255, 255, 255, 0.5),
      inset 2px 2px 8px rgba(186, 190, 204, 0.6);
  }

  .skill-card:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.5),
      inset 2px 2px 5px rgba(186, 190, 204, 0.8),
      inset -2px -2px 8px rgba(255, 255, 255, 0.8);
  }

  .skill-image {
    max-width: 100px;
    height: auto;
    margin: 0 auto 10px;
    border-radius: 10px;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    .skill-card {
      width: calc(50% - 10px);
    }

    .skill-image {
      max-width: 75px;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .skill-card {
      width: calc(33.33% - 10px);
    }

    .skill-image {
      max-width: 85px;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
`;
