import {
    ContentInputs,
    ContentStepTitlesAndText,
    StepOneContent,
    StepTitles,
    Inputs,
    PartOneForm,
    PartTwoForm
} from '../style/styles';

import { IconButton, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import colors from '../utils/colors';

const ProfileTop: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData }) => {
    return (
        <>
            <ContentStepTitlesAndText>
                <StepTitles variant="h5">
                    Profissional
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
                    <PartOneForm>
                        <Inputs
                            id="fullName"
                            label="Nome Completo"
                            variant="outlined"
                            type="text"
                            size='small'
                            required
                            value={formData.fullName}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </PartOneForm>
                    <PartTwoForm>
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" color="green" />
                        <Inputs
                            id="phone1"
                            label="Telefone 1"
                            variant="outlined"
                            type="tel"
                            sx={{ width: '80%' }}
                            size='small'
                            required
                            value={formData.phone1}
                            InputProps={{
                                readOnly: true
                            }}
                        />

                        <Inputs
                            id="phone2"
                            label="Telefone 2"
                            variant="outlined"
                            size='small'
                            sx={{ width: '80%' }}
                            type="tel"
                            value={formData.phone2}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </PartTwoForm>
                </ContentInputs>
            </StepOneContent>
        </>
    )
}

export default ProfileTop;