import React, { useState } from 'react';
import { Heading, Input, Button } from '@chakra-ui/react';
import CalorieCalculator from './CalorieCalculator';
import Onerep from './Onerep';

function Calculators() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [review, setReview] = useState('');
  const [bgColor, setBgColor] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(1));

    let bmiReview = '';
    let bgColor = '';

    if (bmi < 18.5) {
      bmiReview = 'Underweight';
      bgColor = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiReview = 'Normal weight';
      bgColor = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiReview = 'Overweight';
      bgColor = 'yellow';
    } else {
      bmiReview = 'Obese';
      bgColor = 'red';
    }

    setReview(bmiReview);
    setBgColor(bgColor);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          maxWidth: '350px', // Set a maximum width for the container
          margin: 'auto',
          marginTop: '100px',
          marginBottom:'20px'
        
      }}
    >
      <Heading style={{ marginBottom: '20px' }}>BMI</Heading>
      <Input
        type="number"
        id="Weight"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <Input
        type="number"
        id="Height"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <Button
        bg={'#389db2'}
        border={'1px solid  #389db2'}
        onClick={calculateBmi}
        style={{ width: '100%' }}
        color={'white'}
      >
        Calculate BMI
      </Button>
      <div
        id="ans"
        style={{
          backgroundColor: bgColor,
          marginTop: '10px',
          padding: '10px',
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        BMI: {bmiResult}
      </div>
      <div
        id="review"
        style={{
          backgroundColor: bgColor,
          marginTop: '10px',
          padding: '10px',
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        {review}
      </div>
    </div>
    {window.innerWidth < 500 ? (
      <>
        <CalorieCalculator />
        <Onerep />
      </>
    ) : (
      <div style={{ display: 'flex', flexDirection:'column' ,justifyContent: 'space-between', maxWidth: '800px' }}>
        <CalorieCalculator />
        <Onerep />
      </div>
    )}
  </div>
  );
}

export default Calculators;
