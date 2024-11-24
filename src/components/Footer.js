import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: 2,
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Citizen Services Platform | All Rights Reserved.
      </Typography>
      <Link href="https://example.com" target="_blank" sx={{ color: '#fff', textDecoration: 'underline' }}>
        Privacy Policy
      </Link>
    </Box>
  );
};

export default Footer;
