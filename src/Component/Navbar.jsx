import React from 'react';
import { Flex, Box, ButtonGroup, Heading, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <Flex
      position='fixed'
      top='0'
      left='0'
      right='0'
      zIndex='900'
      bg='white'
      minWidth='max-content'
      alignItems='center'
      gap={{ base: '1', md: '2' }} // Adjust gap for different screen widths
      px={{ base: '2', md: '4' }} // Adjust padding-x for different screen widths
      py={{ base: '1', md: '2' }} // Adjust padding-y for different screen widths
      boxShadow='md'
      flexWrap='wrap' // Allow items to wrap on smaller screens
    >
      <Box p={{ base: '1', md: '2' }}> {/* Adjust padding for different screen widths */}
        <Heading size={{ base: 'sm', md: 'md' }} color={'#389db2'}> {/* Adjust heading size for different screen widths */}
         FlexifFit
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup flexWrap='wrap' gap={{ base: '1', md: '2' }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Heading
            size={{ base: 'xs', md: 'sm' }} // Adjust heading size for different screen widths
            color={'#389db2'}
            _hover={{ color: '#0066ee', textDecoration: 'none', transform: 'scale(1.05)' }}
            transition='0.2s'
            whiteSpace='nowrap' // Prevent text from wrapping
          >
            Home
          </Heading>
        </Link>
        <Link to='/exercise' style={{ textDecoration: 'none' }}>
          <Heading
            size={{ base: 'xs', md: 'sm' }}
            color={'#389db2'}
            _hover={{ color: '#0066ee', textDecoration: 'none', transform: 'scale(1.05)' }}
            transition='0.2s'
            whiteSpace='nowrap'
          >
            Exercise
          </Heading>
        </Link>
        <Link to='/calculator' style={{ textDecoration: 'none' }}>
          <Heading
            size={{ base: 'xs', md: 'sm' }}
            color={'#389db2'}
            _hover={{ color: '#0066ee', textDecoration: 'none', transform: 'scale(1.05)' }} 
            transition='0.2s'
            whiteSpace='nowrap'
          >
            Calculators
          </Heading>
        </Link>
        <Link to='/services' style={{ textDecoration: 'none' }}>
          <Heading
            size={{ base: 'xs', md: 'sm' }}
            color={'#389db2'}
            _hover={{ color: '#0066ee', textDecoration: 'none', transform: 'scale(1.05)' }} 
            transition='0.2s'
            whiteSpace='nowrap'
          >
            Services
          </Heading>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
