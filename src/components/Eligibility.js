import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '40px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  backgroundColor: '#ffffffb3', // Semi-transparent white background
  backdropFilter: 'blur(10px)', // Background blur effect
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  zIndex: '1',
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
  marginTop: '16px',
  padding: '12px 24px',
  fontSize: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
});

const Eligibility = () => {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [result, setResult] = useState(''); // State to store the eligibility result

  const handleSubmit = (e) => {
    e.preventDefault();

    // Eligibility criteria
    const isEligible = age >= 18 && age <= 60 && income < 500000;

    // Update the result based on eligibility
    if (isEligible) {
      setResult('Congratulations! You are eligible.');
    } else {
      setResult('Sorry, you are not eligible.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <StyledPaper>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
          Check Eligibility
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Income"
            type="number"
            variant="outlined"
            fullWidth
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <StyledButton type="submit" variant="contained">
            Check Eligibility
          </StyledButton>
        </form>

        {/* Display the result */}
        {result && (
          <Typography
            variant="h6"
            sx={{
              marginTop: 3,
              fontWeight: 'bold',
              color: result.includes('Congratulations') ? 'green' : 'red',
            }}
          >
            {result}
          </Typography>
        )}
      </StyledPaper>
    </Box>
  );
};

export default Eligibility;
