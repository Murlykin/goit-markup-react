import {
    NavSections, NavSiteItams, NavSiteLink, NavSiteLinkAkcent,
} from "./Nav.styled.js";
import {  useLocation } from "react-router-dom";

const NavSection = () => {
    const location = useLocation();
    return (
        <NavSections>
            <NavSiteItams><NavSiteLink to="/" state={{ from: location }}><NavSiteLinkAkcent>Студія</NavSiteLinkAkcent></NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink to="/portfolio" state={{ from: location }}>Портфоліо</NavSiteLink></NavSiteItams>
            <NavSiteItams><NavSiteLink href="#" >Контакти</NavSiteLink></NavSiteItams>
        </NavSections>
    );
};
export default NavSection;


