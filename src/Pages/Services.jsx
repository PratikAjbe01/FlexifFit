import { Button, Input, Heading, Textarea } from '@chakra-ui/react';
import React from 'react';

function Services() {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh', // Set a minimum height of 90vh
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        padding: '20px',
        width: '80%',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '100px',
        marginBottom: '20px'
      }}
    >
      <Heading style={{ marginBottom: '20px' }}>Get Personalized Plan</Heading>
      <form action="https://formspree.io/f/mjvqwedg" method="POST">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <Textarea
          name="message"
          placeholder="Message"
          style={{ marginBottom: '10px', width: '100%', height: '150px' }}
        />
        <Button
          bg={'#389db2'}
          border={'1px solid  #389db2'}
          style={{ width: '100%' }}
          color={'white'}
          type='submit'
        >
          ↗️ Send
        </Button>
      </form>
    </div>
  );
}

export default Services;
