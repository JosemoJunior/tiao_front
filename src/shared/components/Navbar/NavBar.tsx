import {
    ContentButtons,
    ContentTextAndImage,
    NavbarContainer, 
    NavbarToolbar,
    NavbarButton
} from './styles';
// logo
import logo from '../../../assets/logo.webp';
import colors from '../../../utils/colors';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <NavbarContainer position="static">
            <NavbarToolbar>
                <Link to="/">
                    <ContentTextAndImage component='div'>
                        <img src={logo} alt="logo" />
                    </ContentTextAndImage>
                </Link>
                <ContentButtons>
                    <Link to="/register">
                        <NavbarButton style={{ color: colors.blueDark, border:`1px solid ${colors.blueDark}`}} variant='outlined'>Quero me cadastrar</NavbarButton>
                    </Link>
                    <Link to="/login">
                        <NavbarButton style={{ color: colors.light, backgroundColor: colors.blueDark}} variant='contained'>Entrar</NavbarButton>
                    </Link>
                </ContentButtons>
            </NavbarToolbar>
        </NavbarContainer>
    );
};

export default NavBar;