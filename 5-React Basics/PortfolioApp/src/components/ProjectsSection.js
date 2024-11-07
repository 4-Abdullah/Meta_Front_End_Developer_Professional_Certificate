import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "E-Shop Front-End",
    description:
      "Github link of JamStack",
    getImageSrc: () => require("../images/photo1.jpg"),
    url:"https://github.com/4-Abdullah/jamstack-app",
  },
  {
    title: "E-Shop Back-End",
    description:
      "Github link of Strapi",
    getImageSrc: () => require("../images/photo2.jpg"),
    url:"https://github.com/4-Abdullah/back-end05",
  },
  {
    title: "Portfolio",
    description:
      "Github link of Portfolio App",
    getImageSrc: () => require("../images/photo3.jpg"),
    url:"https://github.com/4-Abdullah/Meta_Front_End_Developer_Professional_Certificate/tree/main/5-React%20Basics/PortfolioApp",
  },
  {
    title: "Capstone",
    description:
      "Github link of Front-End",
    getImageSrc: () => require("../images/photo4.jpg"),
    url:"https://github.com/4-Abdullah/Meta_Front_End_Developer_Professional_Certificate/tree/main/7-Front-End%20Developer%20Capstone/front-end",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
