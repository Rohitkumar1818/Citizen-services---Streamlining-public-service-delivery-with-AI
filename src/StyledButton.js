// src/components/StyledButton.js (or within your Eligibility.js)

import { Button } from '@mui/material';
import { styled } from '@mui/system';

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

export default StyledButton;
