import { useState } from 'react';

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
import { SelectChangeEvent } from '@mui/material/Select';


const StepTwo: React.FC<{ formData: any; setFormData: (data: any) => void }> = ({ formData, setFormData }) => {

    const [sex, setSex] = useState('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSex(event.target.value as string);
        setFormData({ ...formData, sex: event.target.value as string });
    };

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, fullName: event.target.value });
    };

    const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, dateOfBirth: event.target.value });
    };

    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, cpf: event.target.value });
    };

    const handlePhone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, phone1: event.target.value });
    };

    const handlePhone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, phone2: event.target.value });
    };    

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
                        onChange={handleFullNameChange}
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
                        onChange={handleDateOfBirthChange}
                    />
                    
                    <FormControl sx={{ width: '25%' }} size="small" required>
                        <LabelInput id="sex">Sexo</LabelInput>
                        <SelectInput
                            labelId="sex"
                            id="sex"
                            value={sex}
                            onChange={handleChange}
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
                        onChange={handleCPFChange}
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
                        onChange={handlePhone1Change}
                    />

                    <Inputs
                        id="phone2"
                        label="Telefone 2"
                        variant="outlined"
                        size='small'
                        sx={{ width: '80%' }}
                        type="tel"
                        value={formData.phone2}
                        onChange={handlePhone2Change}
                    />

                </PartTwoForm>

            </StepTwoContent> 

        </>
    )
}

export default StepTwo;