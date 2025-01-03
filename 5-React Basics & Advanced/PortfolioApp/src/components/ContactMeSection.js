import React, { useEffect, useRef } from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Select, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import { useAlertContext } from "../context/alertContext"; 
import emailjs from '@emailjs/browser';

const ContactMeSection = () => { 
 const { isLoading, response, submit } = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 const form = useRef();

 const sendEmail = (values) => {
    const emailParams = { 
      sender_name: values.sender_name,
      sender_email: values.sender_email,
      message: values.message,
    };
    emailjs.send(
      'service_ntw7y5b', 
      'template_5sxub7k', 
      emailParams, 
      's9eRI1LhgJ5VEYx3R'
    )
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error.text);
    });
 };

 const formik = useFormik({
    initialValues: { 
      sender_name: "", 
      sender_email: "", 
      message: "", 
    },
    onSubmit: (values) => { 
      sendEmail(values); 
      console.log(values); 
    },
    validationSchema: Yup.object({ 
      sender_name: Yup.string().required("Required"), 
      sender_email: Yup.string().email("Invalid email address").required("Required"), 
      message: Yup.string() 
        .min(25, "Must be at least 25 characters") 
        .required("Required"), 
    }), 
 }); 

 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 

 return (
   <FullScreenSection 
     isDarkBackground 
     backgroundColor="#512DA8" 
     py={16} 
     spacing={8} 
   > 
     <VStack w="1024px" p={32} alignItems="flex-start"> 
       <Heading as="h1" id="contactme-section"> 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form ref={form} onSubmit={formik.handleSubmit}>
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.sender_name && formik.touched.sender_name}> 
               <FormLabel htmlFor="sender_name">Name</FormLabel> 
               <Input 
                 id="sender_name" 
                 name="sender_name" 
                 {...formik.getFieldProps("sender_name")} 
               /> 
               <FormErrorMessage>{formik.errors.sender_name}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.sender_email && formik.touched.sender_email}> 
               <FormLabel htmlFor="sender_email">Email Address</FormLabel> 
               <Input 
                 id="sender_email" 
                 name="sender_email" 
                 type="email" 
                 {...formik.getFieldProps("sender_email")} 
               /> 
               <FormErrorMessage>{formik.errors.sender_email}</FormErrorMessage> 
             </FormControl> 
             
             <FormControl isInvalid={!!formik.errors.message && formik.touched.message}> 
               <FormLabel htmlFor="message">Your message</FormLabel> 
               <Textarea 
                 id="message" 
                 name="message" 
                 height={250} 
                 {...formik.getFieldProps("message")} 
               /> 
               <FormErrorMessage>{formik.errors.message}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 );
};

export default ContactMeSection;
