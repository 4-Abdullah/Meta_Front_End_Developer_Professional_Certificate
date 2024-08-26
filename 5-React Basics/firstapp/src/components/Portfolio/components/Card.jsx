import { Heading, HStack, Image, TagLeftIcon, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  
    <HStack >
      <VStack className="Card_style">
        <Image src={imageSrc} className="cardimg_style"/>
        <div className='div_style'> 
        <Heading size='md' p={'5px'} >{title}</Heading>
        <Text className="text_style" p={'5px'}>{description}</Text>
        <HStack  p={'5px'}>
            <div className="veiw_more">See more</div>
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
        </div>
      </VStack>
    </HStack>

  );
};
export default Card;
