import {
    ContentImage,
    ContentImgAndText,
    FooterContainer,
    FooterText,
} from './styles';
// logo
import logo from '../../../assets/logo.webp';

const Footer: React.FC = () => {
    return(
        <FooterContainer component='footer'>

            <ContentImgAndText>
                <ContentImage component='div'>
                    <img src={logo} alt="logo" />
                </ContentImage>
                <FooterText>NOSSA MARCA</FooterText>
            </ContentImgAndText>
            
            <FooterText>Desenvolvido por UNIPÊ</FooterText>
            
        </FooterContainer>
    )
}

export default Footer;