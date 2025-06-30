import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import DownloadButton from "./Downloadbtn";
import { background, Badge, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"
import { Menu,MenuButton,MenuItem,MenuList } from "@chakra-ui/react";
const Featuredproject = [
  {
    title: "Rebuilding Kamyabi Network",
    description:
      `Rebuilt the Kamyabi Network site using Next.js and Tailwind CSS, focusing on fast load times,
       pixel-perfect layout, and responsive UI. The project replicates the original Framer design while
        improving performance and scalability. Deployed with Vercel for continuous delivery.`,
    getImageSrc: () => require("../images/Kamyabi Network.png"),
    repo:"https://github.com/4-Abdullah/duetsch-consultancy/tree/dev-2",
    site:"https://duetsch-consultancy-jf6sw52t6-abdullahs-projects-9847aa36.vercel.app/",
  },
  {
    title: "E-Commerce Store with MERN-Stack",
    description:
      `This project is a full-featured e-commerce platform built using the MERN stack
(MongoDB, Express.js, React.js, Node.js). The platform provides a seamless
shopping experience with essential features such as user authentication, product
management, cart functionality, and a dynamic order-placing system. Customers can
browse through products, add items to their cart, and place orders.`,
    getImageSrc: () => require("../images/E-Commerce-Store-with-MERN-Stack.png"),
    repo:"https://github.com/4-Abdullah/Front-End",
    site:"https://front-end-lemon-seven.vercel.app/",
    adminsite:"https://mern-admin-dashboard-phi.vercel.app/",
  },
 
];
const projects = [
  {
    title: "E-Store & Dashboard(Admin's and Seller's)",
    description:
      `This project is an E-Store built using React, Bootstrap, and JSON server for data
fetching. Challenges that I faced during this project from managing dynamic state
updates to making sure UI components always display fresh data. The platform
provides a seamless shopping experience. Customers can browse through products,
add items to their cart, and place orders. Sellers can view their payments and orders,
and Admin can see details about all users and sellers, and all orders.`,
    getImageSrc: () => require("../images/E-Store-Control.jpeg"),
    repo:"https://github.com/4-Abdullah/E-Store-with-Dashboard-Admin---Sellers-",
    video:"https://www.youtube.com/watch?v=z2VX1zbIPNI",
  },
  {
    title: "Post App",
    description:
      `This project is a Post App that allows users to add or manage posts to it, and
non-users can view others' posts. Use of React, Redux, and using JSON server to
fetch data, and it won't lose data after reload, as data is being fetched from the JSON
server and saved in Redux.`,
    getImageSrc: () => require("../images/Post-App.png"),
    repo:"https://github.com/4-Abdullah/learn-redux-toolkit",
    video:"https://www.youtube.com/watch?v=Xk4wbr2InRU",
  },
  {
    title: "E-Shop with Jam-Stack",
    description:
      "E-Shop Application is an online store to buy products. The visitors can browse products, view products details. Register users will be able to purchase the products.",
    getImageSrc: () => require("../images/eshop-homepage.jpeg"),
    repo:"https://github.com/4-Abdullah/jamstack-app",
    video:"https://www.youtube.com/watch?v=NWNajlp1niA",
  },


];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="black"
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
      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      > */}
        {Featuredproject.map((project) => (
          <HStack  color="black"
                   backgroundColor="white"
                   borderRadius="xl"
                   overflow="hidden"
                  //  width={}
                  //  width={["30vw", "35vw", "40vw", "45vw"]}    // Adjusts width based on viewport size 
                  //  height={["30vh", "35vh", "40vh", "45vh"]}    // Adjusts width based on viewport size 
                  //  maxW="lg"
                   m="4"
                   p="4"  
                   >
               {/* <VStack
                   color="black"
                   backgroundColor="white"
                   borderRadius="xl"
                   overflow="hidden"
                   width={["30vw", "35vw", "40vw", "45vw"]}    // Adjusts width based on viewport size 
                   maxW="lg"
                   m="4"
                 > */}
              <>
                  {/* <a href={url} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}> */}
                    <Image borderRadius="xl" src={project.getImageSrc()} width={["30vw", "35vw", "40vw", "45vw"]} height={["30vh", "35vh", "40vh", "45vh"]} // Adjusts height based on viewport size
                     alt={project.title} objectFit="cover" />
                  
                   <VStack spacing={4} p={4} alignItems="flex-start">
                     <HStack justifyContent="space-between" alignItems="center" width="100%">
                       <Heading as="h3" size="md" minWidth={"150px"}>
                         {project.title}
                       </Heading>
                       <HStack spacing={4} marginLeft="auto">
                       <Button as={"button"} size={"md"} bgColor={"yellow.400"} minWidth="100px" _hover={{ bgColor:"yellow.300", color: "black" }}  onClick={() => window.open(`${project.repo}`, '_blank')}>Repo</Button>
                       <Button as={"button"} size={"md"} bgColor={"yellow.400"} minWidth="100px" _hover={{ bgColor:"yellow.300", color: "black" }} onClick={() => window.open(`${project.site}`, '_blank')}>Visit </Button>
                       {project.adminsite?
                       <Button as={"button"} size={"md"} bgColor={"yellow.400"} minWidth="100px" _hover={{ bgColor:"yellow.300", color: "black" }} onClick={() => window.open(`${project.adminsite}`, '_blank')}>Admin</Button>
                      :<></>}
                      {/* <ButtonGroup isAttached>
  <Button>Options</Button>
  <Menu>
    <MenuButton as={Button} rightIcon={<LuChevronDown />} />
    <MenuList>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuList>
  </Menu>
</ButtonGroup> */}

    {/* <Menu>
  <MenuButton as={Button} rightIcon={<LuChevronDown />} variant="outline" size="sm">
    Options
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => window.open(`${project.site}`, '_blank')}>Visit</MenuItem>
  </MenuList>
</Menu> */}

    
                     </HStack>
                     </HStack>
                     <Text color="#64748b" fontSize={["sm", "md", "lg"]}>
                       {project.description}
                     </Text>
                     {/* <HStack spacing={2} alignItems="center">
                       <p>See more</p>
                       <FontAwesomeIcon icon={faArrowRight}   size="1x" />
                     </HStack> */}
                   </VStack>
                   {/* </a> */}
                 {/* </VStack> */}
                 
         </></HStack>
        ))}
        
        {/* <Box
          display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        > */}
        {projects.map((project) => (
             <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            repo={project.repo}
            video={project.video}
          />
        ))}
        {/* </Box> */}
      {/* </Box> */}
    </FullScreenSection>
  );
};

export default ProjectsSection;

 // <Card
          //   key={project.title}
          //   title={project.title}
          //   description={project.description}
          //   imageSrc={project.getImageSrc()}
          //   url={project.url}
          //   site={project.site}
          // />