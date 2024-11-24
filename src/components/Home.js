import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled Button with hover effects
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

// Styled Paper Component
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

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://via.placeholder.com/1920x1080)', // Replace with real image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <StyledPaper>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
          Welcome to the Citizen Services Platform
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Find and apply for government schemes with ease.
        </Typography>
        <StyledButton variant="contained" href="/scheme-info">
          Learn About Schemes
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default Home;
