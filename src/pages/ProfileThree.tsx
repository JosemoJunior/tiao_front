import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
    StepTitles,
    Inputs,
    ContentStepTitlesAndText,
    StepThreeContent,
    PartOneForm,
    PartTwoForm
} from '../style/styles';


const ProfileThree: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData }) => {

    return (
        <>
            <ContentStepTitlesAndText>
                <StepTitles variant="h5">
                    Informações da Profissão
                </StepTitles>
            </ContentStepTitlesAndText>

            <StepThreeContent>
                <PartOneForm>
                    <FormControl fullWidth>
                        <InputLabel id="profession-label" shrink={true}>Profissão</InputLabel>
                        <Select
                            id="profession"
                            labelId="profession-label"
                            label="Profissão"
                            variant="outlined"
                            type="text"
                            size='small'
                            required
                            value={formData.profession}
                            inputProps={{ readOnly: true }}
                        >
                            <MenuItem value="Arquiteto">Arquiteto</MenuItem>
                            <MenuItem value="Engenheiro Civil">Engenheiro Civil</MenuItem>
                        </Select>
                    </FormControl>
                    <Inputs
                        id="sinceWhen"
                        label="Desde Quando"
                        variant="outlined"
                        size='small'
                        type="date"
                        sx={{ width: '40%' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        value={formData.sinceWhen}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                </PartOneForm>

                <PartTwoForm>
                    <Inputs
                        id="about"
                        label="Conte um pouco sobre você"
                        variant="outlined"
                        size='small'
                        type="text"
                        multiline
                        rows={4}
                        required
                        value={formData.about}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                </PartTwoForm>
            </StepThreeContent>
        </>  
    );
}

export default ProfileThree;