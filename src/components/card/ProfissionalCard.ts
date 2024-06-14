import { styled } from '@mui/material';
import { Card, CardContent as MuiCardContent, Button, Typography } from '@mui/material';

export const CardContainer = styled(Card)({
  maxWidth: 345,
  margin: '16px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const CardImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});

export const CardContent = styled(MuiCardContent)({
  padding: '16px',
});

export const CardTitle = styled(Typography)({
  fontSize: '1.5em',
  margin: '0.5em 0',
  fontWeight: 'bold',
});

export const CardSubtitle = styled(Typography)({
  fontSize: '1.2em',
  color: '#777',
  margin: '0.5em 0',
});

export const CardDescription = styled(Typography)({
  fontSize: '1em',
  color: '#555',
  marginBottom: '1em',
});

export const CardButton = styled(Button)({
  marginTop: '1em',
  padding: '10px 20px',
  border: '1px solid #007bff',
  backgroundColor: '#fff',
  color: '#007bff',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#007bff',
    color: '#fff',
  },
});