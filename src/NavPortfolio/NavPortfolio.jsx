import {
    NavSections, NavSiteItams, NavSiteLink, NavSiteLinkAkcent,
} from "./NavPortfolio.styled";
import {  useLocation } from "react-router-dom";

const NavPortfolio = () => {
    const location = useLocation();
    return (
        <NavSections>
            <NavSiteItams><NavSiteLink to="/" state={{ from: location }}>Студія</NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink to="/portfolio" state={{ from: location }}><NavSiteLinkAkcent>Портфоліо</NavSiteLinkAkcent></NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink href="#" >Контакти</NavSiteLink></NavSiteItams>
        </NavSections>
    );
};
export default NavPortfolio;


