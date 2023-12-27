import React, { useState } from 'react';
import { Heading, Input, Button } from '@chakra-ui/react';

function Onerep() {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [ans, setAns] = useState('');
  const [nintyfive, setNintyFive] = useState('');
  const [ninty, setNinty] = useState('');
  const [eightyfive, setEightyFive] = useState('');
  const [eighty, setEighty] = useState('');
  const [seventyfive, setSeventyFive] = useState('');
  const [showRepMax, setShowRepMax] = useState(false);

  function calculateRepMax() {
    const response = weight * (1 + 0.0333 * reps);
    setAns(response.toFixed(1));
    setNintyFive((response * 0.95).toFixed(1));
    setNinty((response * 0.90).toFixed(1));
    setEightyFive((response * 0.85).toFixed(1));
    setEighty((response * 0.80).toFixed(1));
    setSeventyFive((response * 0.75).toFixed(1));
    setShowRepMax(true);
  }

  return (
    
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '550px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          padding: '20px',
          width: '100%',
          maxWidth: '400px', // Set a maximum width for the container
          margin: 'auto',
          marginTop: '100px',
          marginBottom:'20px'
        }}
      >
        <Heading style={{ marginBottom: '20px' }}>1 Rep Max</Heading>
        <Input
          type="number"
          id="Weight"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
        <Input
          type="number"
          id="Height"
          placeholder="No of Reps"
          onChange={(e) => setReps(e.target.value)}
          style={{ marginBottom: '10px', width: '100%' }}
        />
  
        <Button
          bg={'#389db2'}
          border={'1px solid  #389db2'}
          style={{ width: '100%' }}
          color={'white'}
          onClick={calculateRepMax}
        >
          Calculate
        </Button>
  
        {showRepMax && (
          <>
            <div
              style={{
                backgroundColor: 'blue',
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              1RM 100% rep: {ans}
            </div>
            <div
              style={{
                backgroundColor: 'green', // Different color
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              2RM 95% rep: {nintyfive}
            </div>
            <div
              style={{
                backgroundColor: 'yellow', // Different color
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              3RM 90% rep: {ninty}
            </div>
            <div
              style={{
                backgroundColor: 'orange', // Different color
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              4RM 85% rep: {eightyfive}
            </div>
            <div
              style={{
                backgroundColor: 'red', // Different color
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              5RM 80% rep: {eighty}
            </div>
            <div
              style={{
                backgroundColor: 'purple', // Different color
                marginTop: '10px',
                padding: '10px',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                color: 'white',
              }}
            >
              6RM 75% rep: {seventyfive}
            </div>
          </>
        )}
      </div>
  );
}

export default Onerep;
