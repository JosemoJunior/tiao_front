import { styled } from '@mui/material';
import { Box, TextField, Grid } from '@mui/material';

export const ProfessionalsContainer = styled(Box)({
  padding: '20px',
});

export const SearchBar = styled(TextField)({
  marginBottom: '20px',
  marginLeft: '60px',
  width: '465px'
});

export const GridContainer = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
});

export const GridItem = styled(Grid)({
  flex: '1 1 calc(33.333% - 32px)',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
});