import React, { useEffect, useState } from 'react';
import ProfessionalCard from '../components/card/ProfissionalCard.tsx';
import ErrorScreen from './ErrorScreen';
import { useAllProfissionalData } from '../hooks/useProfissionalData';
import {
    ProfessionalsContainer,
    SearchBar,
    GridContainer,
    GridItem
} from "../style/HomeCli"
import { Typography } from '@mui/material';
import { userData } from '../interface/userData.ts';


const ProfessionalsList: React.FC = () => {


  const [search, setSearch] = useState('');

  const { data } = useAllProfissionalData();

  const [filteredProfessionals, setFilteredProfessionals] = useState<userData[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredProfessionals(
        data.filter(professional =>
          professional.name.toLowerCase().includes(search.toLowerCase()) ||
          professional.profissoes?.[0].nome.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, data]);


  return (
    <div>
        {data ? (
            <ProfessionalsContainer>
                <Typography variant="h4" align="left" marginLeft="60px" gutterBottom>
                    Profissionais cadastrados
                </Typography>
                <SearchBar
                    label="Procure aqui"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <GridContainer>
                    {filteredProfessionals.map(professional => (
                    <GridItem key={professional.email}>
                        <ProfessionalCard {...professional} />
                    </GridItem>
                    ))}
                </GridContainer>
            </ProfessionalsContainer>
        
        ) : (
            <ErrorScreen errorCode={parseInt(localStorage.getItem("error") ?? "404")}/>
        )}
    </div>
)};

export default ProfessionalsList;