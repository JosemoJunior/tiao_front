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
import logout from '../../../utils/authUtils';
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../../../utils/paths';
//import { Navbar } from 'react-bootstrap';

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
                {type === 'home' || type === 'login' || type === 'signup' ? (
                    <ContentButtons>
                        <CustomButtonModal modalType="signup"/>
                        <Link to={LOGIN_PATH}>
                            <NavbarButton style={{ color: colors.light, backgroundColor: colors.blueDark}} variant='contained'>Entrar</NavbarButton>
                        </Link>
                    </ContentButtons>
                ) : type === 'professional' || type === 'client' ? (
                    <ContentButtons>
                        <Link to="/">
                            <NavbarButton onClick={logout} style={{ color: colors.blueDark, border:`1px solid ${colors.blueDark}`}} variant='text'>Logout</NavbarButton>
                        </Link>
                    </ContentButtons>
                ) : null}
            </NavbarToolbar>
        </NavbarContainer>
    );
};

export default NavBar;