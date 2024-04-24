import {
    AuthNav, AuthContakt, AuthSiteItams, AuthSvg,
} from "./Auth.styled";
import Icon from '../images/icons.svg'; 
// import ContactCenter from "../images/Contact-center.png";


const AuthSection = () => {
    return (

        <AuthNav>
            <AuthSiteItams>
                <AuthContakt href="mailto:info@devstudio.com">
                    <AuthSvg width="16" height="12">
                    <use href={Icon + '#poshta'}></use>
                    </AuthSvg>    
                    info@devstudio.com</AuthContakt>
            </AuthSiteItams>
            <AuthSiteItams>
                <AuthContakt href="tel:+380961111111">
                    <AuthSvg width="12" height="16">
                    <use href={Icon + '#smartphone'}></use>
                    </AuthSvg>  +38 096 111 11 11</AuthContakt>
            </AuthSiteItams>
        </AuthNav>
                            // <FooterSvg aria-label="іконка ликедин" width="20" height="20">
                            //     <use href={Icon + '#icon-linkedin'}></use>
        // </FooterSvg>
        
    //      <ul class="link-focus auth-nav">
        //     <li class="auth-nav__items">
        
    //       <a href="mailto:info@devstudio.com" class="auth-nav__contact">
    //         <svg class="auth-nav__icones" width="16" height="12">
    //           <use href="./images/icons.svg#poshta"></use>
    //         </svg>
    //         info@devstudio.com
    //       </a>
        //     </li>
        

    //     <li class="auth-nav__items">
    //       <a href="tel:+380961111111" class="auth-nav__contact">
    //         <svg class="auth-nav__icones" width="10" height="16">
    //           <use href="./images/icons.svg#smartphone"></use>
    //         </svg>
    //         +38 096 111 11 11
    //       </a>
    //     </li>
    //   </ul>
        
        
        
        
        
    );
};
export default AuthSection;
