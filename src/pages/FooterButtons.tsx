import { Link } from 'react-router-dom';
import {
    ContainerFooterButtons,
    ButtonFooterSend,
    ButtonFooterCanceled,
    Line,
} from '../style/styles';

interface FooterButtonsProps {
    onSubmit: () => void;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ onSubmit }) => { 

    return (
        <>

        <Line />

        <ContainerFooterButtons>
            
            <Link to ="/">
                <ButtonFooterCanceled
                    variant="outlined"
                >
                    Cancelar
                </ButtonFooterCanceled>
            </Link>

            <ButtonFooterSend
                variant="contained"
                onClick={onSubmit}
            >
                Fazer seu Cadastro
            </ButtonFooterSend>
        </ContainerFooterButtons>
        
        </>
    )

}

export default FooterButtons;