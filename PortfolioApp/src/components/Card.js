import { background, Badge, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, repo, site }) => {
   return (
     <VStack
       color="black"
       backgroundColor="white"
       borderRadius="xl"
       overflow="hidden"
       width={["30vw", "35vw", "40vw", "45vw"]}    // Adjusts width based on viewport size 
       maxW="lg"
       m="4"
     >
      {/* <a href={url} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}> */}
        <Image borderRadius="xl" src={imageSrc} width={["30vw", "35vw", "40vw", "45vw"]} height={["30vh", "35vh", "40vh", "45vh"]} // Adjusts height based on viewport size
         alt={title} objectFit="cover" />
      
       <VStack spacing={4} p={4} alignItems="flex-start">
         <HStack justifyContent="space-between" alignItems="center" width="100%">
           <Heading as="h3" size="md" minWidth={"150px"}>
             {title}
           </Heading>
           <HStack spacing={4} marginLeft="auto">
           <Button as={"button"} size={"md"} bgColor={"yellow.400"} minWidth="100px" _hover={{ bgColor:"yellow.300", color: "black" }}  onClick={() => window.open(`${repo}`, '_blank')}>Repo</Button>
           <Button as={"button"} size={"md"} bgColor={"yellow.400"} minWidth="100px" _hover={{ bgColor:"yellow.300", color: "black" }} onClick={() => window.open(`${site}`, '_blank')}>Visit</Button>
         </HStack>
         </HStack>
         <Text color="#64748b" fontSize={["sm", "md", "lg"]}>
           {description}
         </Text>
         {/* <HStack spacing={2} alignItems="center">
           <p>See more</p>
           <FontAwesomeIcon icon={faArrowRight}   size="1x" />
         </HStack> */}
       </VStack>
       {/* </a> */}
     </VStack>
   );
};

export default Card;