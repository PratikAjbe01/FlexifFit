import React, { useState } from 'react';
import { Heading, Input, Button, Select } from '@chakra-ui/react';

function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height,setHeight]=useState('')
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState({});
  const [showResult, setShowResult] = useState(false);

  const calculateCalories = () => {
    const activityLevels = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    let BMR;
    if (gender === 'male') {
      BMR = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * ( height* 100) - 5 * age - 161;
    }

    const maintenanceCalories = BMR * activityLevels[activityLevel];
    const weightGainCalories = maintenanceCalories + 500; 
    const weightLossCalories = maintenanceCalories - 500; 

    setCalories({
      maintenance: maintenanceCalories.toFixed(0),
      gain: weightGainCalories.toFixed(0),
      loss: weightLossCalories.toFixed(0),
    });
    setShowResult(true);
  };

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      padding: '20px',
      width: '100%',
      maxWidth: '400px', // Set a maximum width for the container
      margin: 'auto',
      marginTop: '100px',
    }}
  >
    <Heading style={{ marginBottom: '20px' }}>Calorie Calculator</Heading>
    <Input
      type="number"
      id="Weight"
      placeholder="Weight (kg)"
      onChange={(e) => setWeight(e.target.value)}
      style={{ marginBottom: '10px', width: '100%' }}
    />
    <Input
      type="number"
      id="Age"
      placeholder="Age"
      onChange={(e) => setAge(e.target.value)}
      style={{ marginBottom: '10px', width: '100%' }}
    />
    <Input
      type="number"
      id="Height"
      placeholder="Height"
      onChange={(e) => setHeight(e.target.value)}
      style={{ marginBottom: '10px', width: '100%' }}
    />
    <Select
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      style={{ marginBottom: '10px', width: '100%' }}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Select>
    <Select
      value={activityLevel}
      onChange={(e) => setActivityLevel(e.target.value)}
      style={{ marginBottom: '10px', width: '100%' }}
    >
      <option value="sedentary">Sedentary</option>
      <option value="light">Light</option>
      <option value="moderate">Moderate</option>
      <option value="active">Active</option>
      <option value="veryActive">Very Active</option>
    </Select>

    <Button
      bg={'#389db2'}
      border={'1px solid  #389db2'}
      style={{ width: '100%' }}
      color={'white'}
      onClick={calculateCalories}
    >
      Calculate
    </Button>

      {showResult && (
        <div>
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
            Estimated Maintenance Calories: {calories.maintenance/100} kcal/day
          </div>
          <div
            style={{
              backgroundColor: 'green',
              marginTop: '10px',
              padding: '10px',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Estimated Calories for Weight Gain: {calories.gain/100} kcal/day
          </div>
          <div
            style={{
              backgroundColor: 'red',
              marginTop: '10px',
              padding: '10px',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Estimated Calories for Weight Loss: {calories.loss/100} kcal/day
          </div>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;
