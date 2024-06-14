import { Link } from 'react-router-dom';
import {
    ContainerFooterButtons,
    ButtonFooterCanceled,
    Line,
} from '../style/styles';
import { CLIENTE_PATH } from '../utils/paths';


const FooterButtons2 = () => { 

    return (
        <>
        <Line />

        <ContainerFooterButtons>
            
            <Link to ={CLIENTE_PATH}>
                <ButtonFooterCanceled
                    variant="outlined"
                >
                    Voltar
                </ButtonFooterCanceled>
            </Link>
        </ContainerFooterButtons>
        
        </>
    )

}

export default FooterButtons2;