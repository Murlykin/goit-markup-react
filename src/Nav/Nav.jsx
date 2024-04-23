import {
    NavSections, NavSiteItams, NavSiteLink
    
} from "./Nav.styled.js";

// import ContactCenter from "../images/Contact-center.png";


const NavSection = () => {
    return (
        <NavSections>
          <NavSiteItams><NavSiteLink href="index.html" >Студія</NavSiteLink></NavSiteItams>
          <NavSiteItams><NavSiteLink href="portfolio.html">Портфоліо</NavSiteLink></NavSiteItams>
          <NavSiteItams><NavSiteLink href="#" >Контакти</NavSiteLink></NavSiteItams>
        </NavSections>
      
    //   <ul class="link-focus auth-nav">
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
export default NavSection;


