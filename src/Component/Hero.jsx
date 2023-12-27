import React from 'react';
import { Flex, Box, Button, Heading } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import background from '../assets/background.avif';

function Hero() {
  return (
    <Flex
      h='100vh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column' // Change to column layout for smaller screens
      gap='20'
      marginTop='40px'
      backgroundImage={`url(${background})`}
      backgroundSize='cover'
      textAlign='center' // Center align content for smaller screens
      padding='20px'
    // Add some padding for smaller screens
    >
      <Box maxWidth='800px'>
        <Heading
          size='2xl'
          fontWeight='extrabold'
          mb='4'
          fontFamily='sans-serif'
          fontSize={['5.5rem', '3rem']} // Adjust font size for different screen widths
          color='white'
          style={{
            textShadow: '0px 0px 10px #389db2',
          }}
        >
          Elevate Your Fitness Journey
        </Heading>
        <p
          style={{
            textShadow: '0px 0px 10px #389db2',
            marginTop: '20px',
            color: 'white',
            fontSize: ['1.2rem', '1.4rem'], // Adjust font size for different screen widths
            fontWeight: 'bold',
          }}
        >
          Whether you're on a journey to build strength, improve endurance, or achieve a healthier lifestyle, we've got
          you covered with a curated collection of exercises and a range of fitness calculators.
        </p>

        <p
          style={{
            textShadow: '0px 0px 10px #389db2',
            marginTop: '20px',
            color: 'white',
            fontSize: ['1.2rem', '1.4rem'],
            fontWeight: 'bold',
          }}
        >
          Embark on a transformative fitness experience with our extensive exercise collection. From bodyweight workouts
          to targeted muscle training, our diverse range of exercises caters to all fitness levels and goals. Whether
          you're a beginner taking your first steps or a seasoned athlete pushing your limits, our exercise library
          offers guidance, tips, and techniques to help you reach your peak performance.
        </p>

        <Button
          display='block'
          mt='4'
          ml={'4'}
          h='50px'
          w='200px'
          color='#389db2'
          backgroundColor='white'
          fontSize='1.4rem'
          fontWeight='bold'
          marginBottom='20px'
        >
          <Link to='/exercise'> Explore Exercise</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Hero;
