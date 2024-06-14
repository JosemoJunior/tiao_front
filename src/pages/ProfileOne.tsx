import {
    ContentInputs,
    ContentStepTitlesAndText,
    StepOneContent,
    StepTitles,
    Inputs,
} from '../style/styles';

import { IconButton, Typography, Box, InputAdornment } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import colors from '../utils/colors';
import { Email } from '@mui/icons-material';

const ProfileOne: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData }) => {
    return (
        <>
            <ContentStepTitlesAndText>
                <StepTitles variant="h5">
                    Informações Cadastrais
                </StepTitles>
            </ContentStepTitlesAndText>

            <StepOneContent>
                <div style={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                            width: 200,
                            height: 166,
                            border: `2px dashed ${colors.blueDark}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '20px auto',
                            overflow: 'hidden',
                        }}
                    >
                        {formData.image ? (
                            <img src={formData.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                }}
                                component='div'
                            >
                                <IconButton sx={{ 
                                    width: '70px', 
                                    height: '70px', 
                                    borderRadius: '50%', 
                                    backgroundColor: colors.blueDark, 
                                    color: colors.light, 
                                    '&: hover': {
                                        backgroundColor: colors.blueDark,
                                        color: colors.light,
                                        opacity: 0.8
                                    }
                                }} aria-label="profile picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                                <Typography variant="caption">Nenhuma foto adicionada</Typography>
                            </Box>
                        )}
                    </Box>
                </div>
                
                <ContentInputs>
                    <Inputs
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        size='small'
                        type='email'
                        sx={{ width: '100%' }}
                        required
                        value={formData.email}
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="email"
                                        edge="end"
                                    >
                                        <Email />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </ContentInputs>
            </StepOneContent>
        </>
    )
}

export default ProfileOne;