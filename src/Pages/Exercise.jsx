import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox,VStack } from '@chakra-ui/react'
import { Card, Heading, CardBody, Stack, Image, Input, HStack, Button,Spinner } from '@chakra-ui/react';
function Exercise() {
  const [exercise, setExercise] = useState([]);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchitem, setsearchitem] = useState('');
  const [filteredExercise, setFilteredExercise] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loading,setloading]=useState('loading');
  const targetMuscles = [
    'abductors', 'abs', 'adductors', 'biceps', 'calves', 'cardiovascular system',
    'delts', 'forearms', 'glutes', 'hamstrings', 'lats', 'levator scapulae',
    'pectorals', 'quads', 'serratus anterior', 'spine', 'traps', 'triceps', 'upper back'
  ];
  const ShowExercise = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': '6389936ec1msh6b2fffbfda2f8a1p187673jsn958e57cf04e2',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      
      const response = await axios.request(options);
      setExercise(response.data);
      setFilteredExercise(response.data);
      setTotalItems(response.data.length);
      setloading('');
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    ShowExercise();
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchClick = () => {
    const filteredData = exercise.filter((data) =>
      data.name.toLowerCase().includes(searchitem.toLowerCase())
    );
    setFilteredExercise(filteredData);
    setCurrentPage(1);
    setTotalItems(filteredData.length);
  };
  const handleCheckboxChange = (targetMuscle) => {
    if (searchitem === targetMuscle) {
      setsearchitem(''); 
      setFilteredExercise(exercise); 
      setCurrentPage(1);
      setTotalItems(exercise.length);
    } else {
      setsearchitem(targetMuscle);
      const CheckboxData = exercise.filter((data) =>
        data.target.toLowerCase().includes(targetMuscle.toLowerCase())
      );
      setFilteredExercise(CheckboxData);
      setCurrentPage(1);
      setTotalItems(CheckboxData.length);
    }
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: '80px',
    }}>
      <HStack>
        <Input
          placeholder='Search Exercise...'
          size='md'
          w={['80%', '60%', '50%']}
          border='1px solid #389db2'
          outline='none'
          value={searchitem}
          onChange={(e) => setsearchitem(e.target.value)}
        />
        <Button
          display='block'
          h='38px'
          p='1'
          w='70px'
          color={'#389db2'}
          border={'1px solid  #389db2'}
          onClick={handleSearchClick}
        >
          Search
        </Button>
        <Button
          display='block'
          h='38px'
          p='1'
          w='70px'
          border={'1px solid  #389db2'}
          color={'#389db2'}
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
        </Button>
      </HStack>
      {loading && <Spinner
   thickness='4px'
   speed='0.65s'
   emptyColor='gray.200'
   color='#389db2'
   size='xl'
/>}
<VStack alignItems='flex-start' marginLeft={['10%', '5%']} display={showFilter ? 'flex' : 'none'}>
        <Stack spacing={2} direction={['column', 'row']} flexWrap='wrap'>
          {targetMuscles.map((muscle) => (
            <div key={muscle} style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                id={muscle}
                isChecked={searchitem === muscle}
                onChange={() => handleCheckboxChange(muscle)}
                style={{ marginRight: '5px' }}
              >
                {muscle}
              </Checkbox>
            </div>
          ))}
        </Stack>
      </VStack>
 
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '50px',
        }}>
        {filteredExercise.slice(startIndex, endIndex).map((data) => (
          <Card maxW='sm' key={data.id} boxShadow='md' rounded='md'>
            <CardBody>
              <Image src={data.gifUrl} alt='Exercise GIF' borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading size='sm' mx='auto'>
                  {data.name}
                </Heading>
                <Heading size='sm' mx='auto'>
                  Equipment: {data.equipment}
                </Heading>
                <Heading size='sm' mx='auto'>
                  BodyPart: {data.target}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '3px', marginBottom: '20px', marginTop:'10px' }}>
        <Button
          size={'sm'}
          variant='outline'
          color={'#389db2'}
          border={'1px solid  #389db2'}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </Button>
        <Button size={'sm'} color={'#389db2'}>
          {currentPage}
        </Button>
        <Button
          size={'sm'}
          variant='outline'
          color={'#389db2'}
          border={'1px solid  #389db2'}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Exercise;
