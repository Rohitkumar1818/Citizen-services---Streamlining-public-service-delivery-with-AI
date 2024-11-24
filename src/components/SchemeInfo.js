import React from 'react';
import { Box, Typography, Paper, Grid, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Hover effect for Card
const StyledCard = styled(Card)({
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
  },
});

// Styled Paper for the page
const StyledPaper = styled(Paper)({
  padding: '20px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  backgroundColor: '#fff',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
  },
});

const SchemeInfo = () => {
  return (
    <Box
      sx={{
        padding: '50px 0',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
        minHeight: '100vh',
      }}
    >
      <Box sx={{ textAlign: 'center', color: '#fff' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Government Scheme Information
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Learn more about the various government schemes available to citizens.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledCard>
            <img
              src="https://via.placeholder.com/500x300" // Use relevant image URL here
              alt="Scheme Image"
              style={{
                width: '100%',
                borderRadius: '12px 12px 0 0',
                objectFit: 'cover',
                height: '200px',
              }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                XYZ Health Scheme
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                This scheme provides financial assistance for healthcare services, covering medical expenses for eligible individuals.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
                href="/eligibility"
              >
                Check Eligibility for this Scheme
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SchemeInfo;
