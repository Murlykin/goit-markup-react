import {
    AuthNav, AuthContakt, AuthSiteItams, AuthSvg,
} from "./Auth.styled";
import Icon from '../images/icons.svg'; 
// import ContactCenter from "../images/Contact-center.png";


const AuthSection = () => {
    return (

        <AuthNav>
            <AuthSiteItams>
                <AuthSvg width="16" height="12">
                    <use href={Icon + '#poshta'}></use>
                </AuthSvg>
                <AuthContakt href="mailto:info@devstudio.com">info@devstudio.com</AuthContakt>

                    
            </AuthSiteItams>
            <AuthSiteItams>
                <AuthContakt href="tel:+380961111111">
                    <AuthSvg width="12" height="16">
                    <use href={Icon + '#smartphone'}></use>
                    </AuthSvg>+38 096 111 11 11</AuthContakt>
            </AuthSiteItams>
        </AuthNav>
    );
};
export default AuthSection;
