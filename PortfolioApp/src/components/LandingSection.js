import React from "react";
import { Avatar, Center, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import mypic from '../images/mypic.png'
import DownloadButton from "./Downloadbtn";
const greeting = "Hello, I am Abdullah!";
const bio1 = "A Developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
   <VStack spacing={6}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src={mypic} 
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading>
       {/* <DownloadButton/> */}

     </VStack>
    
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 
    
  </FullScreenSection>
);

export default LandingSection;
