import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Styled Card
const StyledCard = styled(Card)({
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
  },
});

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setSchemes([
        { id: 1, name: 'Healthcare Scheme', description: 'Free healthcare for eligible individuals.' },
        { id: 2, name: 'Education Scheme', description: 'Scholarships for underprivileged students.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Personalized Dashboard
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {schemes.map((scheme) => (
            <Grid item xs={12} md={6} key={scheme.id}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5">{scheme.name}</Typography>
                  <Typography variant="body1">{scheme.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;
