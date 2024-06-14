import {
    ContentStepTitlesAndText,
    StepTitles,
    StepTwoContent,
    Inputs,
    LabelInput,
    SelectInput,
    MenuItemInput,
    PartOneForm,
    PartTwoForm,
} from '../style/styles';
import { FormControl } from '@mui/material';

const ProfileTwo: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData }) => {

    return (
        <>
            <ContentStepTitlesAndText>
                <StepTitles variant="h5">
                    Informações Pessoais
                </StepTitles>
            </ContentStepTitlesAndText>

            <StepTwoContent>

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

                    <Inputs
                        id="dateOfBirth"
                        label="Data de Nascimento"
                        variant="outlined"
                        size='small'
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        sx={{
                            width: '40%',
                            '& input': {
                                '&::-webkit-inner-spin-button': {
                                    display: 'none',
                                },
                                '&::-webkit-calendar-picker-indicator': {
                                    opacity: 0,
                                    display: 'none',
                                },
                            },
                        }}
                        required
                        value={formData.dateOfBirth}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    
                    <FormControl sx={{ width: '25%' }} size="small" required>
                        <LabelInput id="sex">Sexo</LabelInput>
                        <SelectInput
                            labelId="sex"
                            id="sex"
                            value={formData.sex}
                            inputProps={{ readOnly: true }}
                        >
                            <MenuItemInput value={'masculino'}>Masculino</MenuItemInput>
                            <MenuItemInput value={'feminino'}>Feminino</MenuItemInput>
                        </SelectInput>
                    </FormControl>
                </PartOneForm>
                
                <PartTwoForm>

                    <Inputs
                        id="cpf"
                        label="CPF"
                        variant="outlined"
                        size='small'
                        type="text"
                        required
                        value={formData.cpf}
                        InputProps={{
                            readOnly: true
                        }}
                    />

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

            </StepTwoContent> 

        </>
    )
}

export default ProfileTwo;