import { userData } from "../../interface/userData";
import photo from "../../assets/Professions/trabM.png";
import {
    CardContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardDescription,
    CardButton
  } from './ProfissionalCard';
import { Link } from "react-router-dom";


export function ProfessionalCard(profissional: userData){
  return (
    <CardContainer>
        <CardImage src={photo} alt={`${profissional.name} photo`} />
        <CardContent>
            <CardTitle>{profissional.name}</CardTitle>
            <CardSubtitle>{profissional.profissoes![0].nome}</CardSubtitle>
            <CardDescription>{profissional.bio}</CardDescription>
            <Link to={"/profile/" + profissional.email}>
              <CardButton>Ver perfil</CardButton>
            </Link>
        </CardContent>
    </CardContainer>
  );
};

export default ProfessionalCard;
