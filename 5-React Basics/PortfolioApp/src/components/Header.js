import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {

  const [scrollingUp, setScrollingUp] = useState(0);

  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current){
        if (currentScrollY > scrollingUp) {
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      setScrollingUp(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollingUp]);
 
  return (
    <Box 
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      backgroundColor="#18181b"
      zIndex={10}
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {socials.map((social, index) => {
                return(
                <Box key={index}><a  href={social.url} >
                    <FontAwesomeIcon icon={social.icon} size='2x'/>
                </a></Box>)
              })}
            </HStack>
             
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#contactme' onClick={handleClick('contactme')}>Contact Me</a>
              <a href='#projects' onClick={handleClick('projects')}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
