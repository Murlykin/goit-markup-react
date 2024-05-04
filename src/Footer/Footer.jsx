import {
    FooterSection, FooterContainer, FooterBlock, FooterLogo, FooterLogoColor,
    FooterAdress, FooterAdressItems, FooterAdressMap, FooterAdressContact, FooterAdd,
    FooterTitle, FooterLink, FooterLinkItems, FooterLinks, FooterLinksSvg,
    FootersubskribeConteiner, Footersubskribe, FootersubskribeForm, FootersubskribeFormImput,
    FootersubskribeButton, FootersubskribeSvg
} from "./Footer.styled";
import Icon from '../images/icons.svg';
// import ContactCenter from "../images/Contact-center.png";


const FooterSections = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterBlock>
                    <FooterLogo href="index.html" lang="en">Web<FooterLogoColor>Studio</FooterLogoColor></FooterLogo>
                    <address>
                        <FooterAdress>
                            <FooterAdressItems>
                                <FooterAdressMap href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9" target="_blank"
                                    rel="noopener noreferrer">м. Київ, пр-т Лесі Українки, 26</FooterAdressMap>
                            </FooterAdressItems>
                            <FooterAdressItems>
                                <FooterAdressContact href="mailto:info@devstudio.com">info@devstudio.com</FooterAdressContact>
                            </FooterAdressItems>
                            <FooterAdressItems>
                                <FooterAdressContact href="tel:+380961111111">+38 096 111 11 11</FooterAdressContact>
                            </FooterAdressItems>
                        </FooterAdress>
                    </address>
                </FooterBlock>
                <FooterAdd>
                    <FooterTitle>ПРИЄДНУЙТЕСЬ</FooterTitle>
                    <FooterLink>
                        <FooterLinkItems>
                            <FooterLinks>
                                <FooterLinksSvg aria-label="іконка інстаграм" class="icones" width="20" height="20">
                                    <use href={Icon + '#icon-instagram'}></use>

                                </FooterLinksSvg>
                            </FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinks>
                                <FooterLinksSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                    <use href={Icon + '#icon-tviter'}></use>

                                </FooterLinksSvg>
                            </FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinks>
                                <FooterLinksSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                    <use href={Icon + '#icon-facebook'}></use>

                                </FooterLinksSvg>
                            </FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinks>
                                <FooterLinksSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                    <use href={Icon + '#icon-linkedin'}></use>
                                </FooterLinksSvg>
                            </FooterLinks>
                        </FooterLinkItems>
                    </FooterLink>
                </FooterAdd>
                <FootersubskribeConteiner>
                <FooterTitle>Підпишіться на розсилку</FooterTitle>
                    <FootersubskribeForm>
                        <Footersubskribe>
                            <label for="email"></label>
                            <FootersubskribeFormImput type="email" name="mail" id="mail" placeholder="E-mail" />
                            <FootersubskribeButton type="submit">Підписатися
                                <FootersubskribeSvg width="24" height="24">
                                    <use href={Icon + '#icon-icon-send'}></use>
                                </FootersubskribeSvg></FootersubskribeButton>
                        </Footersubskribe>
                    </FootersubskribeForm>
                </FootersubskribeConteiner>
            </FooterContainer>
        </FooterSection>
    );
};
export default FooterSections;
