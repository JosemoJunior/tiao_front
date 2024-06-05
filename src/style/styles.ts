import { styled } from "@mui/material";
import {
    Box,
    Card,
    CardContent,
    Typography,
    FormControl,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Divider,
} from '@mui/material';
import colors from "../utils/colors";


/** *************************** É usado em todos os steps ******************************* */
export const ContainerText = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff; 
    box-shadow: 5px 5px 10px 1px ${colors.gray};
    height: 3rem;
`;

export const TextOfContainer = styled(Typography)`
    font-size: 16px;
    color: ${colors.gray};
`;

export const Steps = styled(Card)`
    margin-top: 2rem;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    width: 65%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 5px 10px 1px ${colors.gray};
    padding: 1rem;
`;

export const ContainerForm = styled(FormControl)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentStepTitlesAndText = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

export const ContentInputs = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px; /* Increased gap for spacing */
`;

export const StepTitles = styled(Typography)`
    margin-bottom: 0.5rem; /* Adjusted margin */
`;

export const StepText = styled(Typography)`
    font-size: 16px;
`;

export const Inputs = styled(TextField)`
    width: 100%;
`;

export const SelectProf = styled(Select)`
width: 100%;
`;

/** *************************** É usado em todos os steps ******************************* */

/** *************************** Step One ******************************* */
export const StepOneContent = styled(CardContent)`
    display: flex;
    flex-direction: row; /* Changed to column for better spacing */
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    gap: 20px; /* Added gap for spacing */
`;

export const ContainerPasswordsStepOneContent = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
`;
/** *************************** Step One ******************************* */

/** *************************** Step Two ******************************* */
export const StepTwoContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 20px; /* Added gap for spacing */
    width: 100%;
`;

export const InputContainer = styled(Box)`
    
`;

export const LabelInput = styled(InputLabel)`
    width: 100%;
`;

export const SelectInput = styled(Select)`
    width: 100%;
`;

export const MenuItemInput = styled(MenuItem)`
    
`;

/** *************************** Step Two ******************************* */

/** *************************** Serve para o Step Two e Three ******************************* */
export const PartOneForm = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Added gap for spacing */
    width: 100%;
`;

export const PartTwoForm = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Added gap for spacing */
    width: 100%;
`;

/** *************************** Serve para o Step Two e Three ******************************* */

/** *************************** Step Three ******************************* */
export const StepThreeContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Added gap for spacing */
    width: 100%;
`;
/** *************************** Step Three ******************************* */

/** *************************** Footer Buttons ******************************* */

export const Line = styled(Divider)`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const ContainerFooterButtons = styled(Box)`
    background-color: #fff;
    height: 70px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px; /* Added gap for spacing */
    width: 100%;
`;

export const ButtonFooterSend = styled(Button)`
    width: 300px;
    height: 40px;
    margin-right: 20px;

    text-transform: none;

    color: ${colors.light};
    background-color: ${colors.blueDark};
    trasition: all ease-in 0.3s;

    &:hover {
        background-color: ${colors.blueDark};
        opacity: 0.8;
    }
`;

export const ButtonFooterCanceled = styled(Button)`
    width: 200px;
    height: 40px;
    margin-left: 20px;

    color: ${colors.blueDark};
    background-color: ${colors.light};
    trasition: all ease-in 0.3s;
    
    text-transform: none;

    &:hover {
        background-color: ${colors.light};
        opacity: 0.8;
    }
`;