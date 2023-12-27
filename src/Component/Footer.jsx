import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py="4"
      position='relative'
      bottom='0'
      left='0'
      right='0'
      // marginTop={{ base: '20px', md: '50px' }} 
    >
      <Flex
        direction={{ base: 'column', md: 'row' }} 
        justifyContent="center"
        alignItems="center"
        textAlign={{ base: 'center', md: 'left' }} 
      >
        <Text>&copy; 2023 FlexifFit. All rights reserved.</Text>
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }} 
        justifyContent="center"
        alignItems="space-between"
        mt={{ base: '2', md: '0' }} 
        textAlign={{ base: 'center', md: 'left' }} 
      >
        <Link mx={{ base: '0', md: '2' }} href="/">
          About Us
        </Link>
        <Link mx={{ base: '0', md: '2' }} href="/services">
          Contact Us
        </Link>
        <Link mx={{ base: '0', md: '2' }}>
          Privacy Policy
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
