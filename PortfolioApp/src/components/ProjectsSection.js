import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import DownloadButton from "./Downloadbtn";
const projects = [
  {
    title: "E-Shop",
    description:
      "E-Shop Application is an online store to buy products. The visitors can browse products, view products details. Register users will be able to purchase the products.",
    getImageSrc: () => require("../images/eshop-homepage.jpeg"),
    repo:"https://github.com/4-Abdullah/jamstack-app",
    site:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279076987376140288?compact=1",
  },

  {
    title: "Little Lemon",
    description:
      "A simple front-end page of Little lemon restaurant. It is built using React. Users can browse available tables,select date and time, and provide details about the occasion.",
    getImageSrc: () => require("../images/Little-lemon-Homepage.jpeg"),
    repo:"https://github.com/4-Abdullah/Meta_Front_End_Developer_Professional_Certificate/tree/main/7-Front-End%20Developer%20Capstone/front-end",
    site:"https://little-lemon-app-lyart.vercel.app/",
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
    <div className="flex_heading-btn">
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      {/* <DownloadButton/> */}
    </div>
    {/* <div class="responsive-iframe">
  <iframe 
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279076987376140288?compact=1" 
    frameborder="0" 
    allowfullscreen 
    title="Embedded post"
  ></iframe>
  
</div> */}
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
            site={project.site}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
