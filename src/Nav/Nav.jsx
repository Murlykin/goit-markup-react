import {
    NavSections, NavSiteItams, NavSiteLink, NavSiteLinkAkcent,

} from "./Nav.styled.js";

// import ContactCenter from "../images/Contact-center.png";


const NavSection = () => {
    return (
        <NavSections>
            <NavSiteItams><NavSiteLink href="index.html" ><NavSiteLinkAkcent>Студія</NavSiteLinkAkcent></NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink href="portfolio.html">Портфоліо</NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink href="#" >Контакти</NavSiteLink></NavSiteItams>


        </NavSections>

    );
};
export default NavSection;


