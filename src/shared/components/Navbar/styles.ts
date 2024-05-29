import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
} from '@mui/material';
import colors from '../../../utils/colors';

export const NavbarContainer = styled(AppBar)({
  height: '114px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colors.light,
  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.2)',
});

export const NavbarToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
  
export const ContentTextAndImage = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  marginLeft: '60px',
});

export const ContentButtons = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginRight: '40px',
});

export const NavbarButton = styled(Button)({
  width: '250px',
  height: '40px',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '8px',
  textTransform: 'none',
});