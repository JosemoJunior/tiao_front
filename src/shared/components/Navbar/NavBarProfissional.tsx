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
import logout from '../../../utils/authUtils';
import { Link } from 'react-router-dom';

const NavBarProfissional: React.FC = () => {
    return (
        <NavbarContainer position="static">
            <NavbarToolbar>
                <Link to="/">
                    <ContentTextAndImage component='div'>
                        <img src={logo} alt="logo" />
                    </ContentTextAndImage>
                </Link>
                <ContentButtons>
                    <Link to="/">
                        <NavbarButton onClick={logout} style={{ color: colors.blueDark, border:`1px solid ${colors.blueDark}`}} variant='outlined'>logout</NavbarButton>
                    </Link>
                </ContentButtons>
            </NavbarToolbar>
        </NavbarContainer>
    );
};

export default NavBarProfissional;