import {
    ContentButtons,
    ContentTextAndImage,
    NavbarContainer, 
    NavbarToolbar,
    NavbarButton
} from './styles';
import logo from '../../../assets/logo.webp';
import colors from '../../../utils/colors';
import CustomButtonModal from '../../../modal/modal';
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../../../utils/paths';

type NavBarProps = {
    type: 'login' | 'signup' | 'professional' | 'home' | 'client' | '' ;
};

const NavBar: React.FC<NavBarProps> = ({ type }) => {
    return (
        <NavbarContainer position="static">
            <NavbarToolbar>
                <Link to="/">
                    <ContentTextAndImage component='div'>
                        <img src={logo} alt="logo" />
                    </ContentTextAndImage>
                </Link>
                {
                    type === 'home' || 'login' ?
                        <ContentButtons>
                            <CustomButtonModal modalType="signup"/>
                            <Link to={LOGIN_PATH}>
                                <NavbarButton style={{ color: colors.light, backgroundColor: colors.blueDark}} variant='contained'>Entrar</NavbarButton>
                            </Link>
                        </ContentButtons>
                    :
                    type === '' ?
                        null
                    :
                    type === 'professional' || 'client' ?
                        <ContentButtons>
                            <NavbarButton style={{ color: colors.blueDark, border:`1px solid ${colors.blueDark}`}} variant='text'>Voltar</NavbarButton>
                            <NavbarButton style={{ color: colors.light, backgroundColor: colors.blueDark}} variant='text'>Próximo</NavbarButton>
                        </ContentButtons>
                    :
                    null
                }
            </NavbarToolbar>
        </NavbarContainer>
    );
};

export default NavBar;