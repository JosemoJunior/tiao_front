import { styled } from '@mui/material/styles';
import {
    Box,
    Typography,
} from '@mui/material';
import colors from '../../../utils/colors';

export const FooterContainer = styled(Box)({
    width: '100vw',
    height: '165px',
    backgroundColor: colors.darkFooter,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
});

export const ContentImgAndText = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '60px',
    gap: '8px',
});

export const ContentImage = styled(Box)({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: colors.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const FooterText = styled(Typography)({
    fontSize: '16px',
    marginRight: '60px',
    textAlign: 'center',
});