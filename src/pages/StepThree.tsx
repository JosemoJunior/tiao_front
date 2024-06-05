import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
    StepTitles,
    Inputs,
    ContentStepTitlesAndText,
    StepThreeContent,
    PartOneForm,
    PartTwoForm
} from '../style/styles';


const StepThree: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData, setFormData }) => {

    const handleProfessionChange = (event: SelectChangeEvent<string>) => {
        setFormData({ ...formData, profession: event.target.value});
    };

    const handleSinceWhenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, sinceWhen: event.target.value });
    };

    const handleAboutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, about: event.target.value });
    };

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
                            onChange={handleProfessionChange}
                            inputProps={{ shrink: "true" }}
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
                        onChange={handleSinceWhenChange}
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
                        onChange={handleAboutChange}
                    />
                </PartTwoForm>
            </StepThreeContent>
        </>  
    )
}

export default StepThree;