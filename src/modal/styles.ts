import { styled, Typography } from "@mui/material";
import { Button, Modal, Box, Divider } from '@mui/material';

export const ModalContainer = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const ModalContent = styled(Box)`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    width: 560px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Added gap for spacing */
`;

export const ModalTitle = styled(Typography)`
    text-align: center;
    font-size: 22px;
    font-weight: 600;
`;

export const ModalButton = styled(Button)`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalText = styled(Typography)`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;

export const ModalButtonClose = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const ModalButtonOpen = styled(Button)({
    width: '250px',
    height: '40px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
});

export const ContentImage = styled(Box)`
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
`;

export const Line = styled(Divider)`
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
`;

export const ContentButtons = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
`;

export const ButtonAndText = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

