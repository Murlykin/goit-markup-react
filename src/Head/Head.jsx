import {
    HeadSections,
    HeadSectionsLogoColor, HeadSectionsLogo, HeadConteiner, HeadMain

} from "./Head.styled.js";
import MobilMenu from '../Mobil/index'
import NavSection from '../Nav/index.js';
import AuthSection from '../Auth/index.js';
import {  useLocation } from "react-router-dom";

const HeadSection = () => {
    const location = useLocation();
    return ( 
        <HeadSections>
            <HeadConteiner>
            <HeadMain>
            <HeadSectionsLogo to="/" state={{ from: location }} lang="en" data-wow-offset="100">
            <HeadSectionsLogoColor>Web</HeadSectionsLogoColor >Studio</HeadSectionsLogo>
                    <> <NavSection /> <AuthSection /></> <MobilMenu id="js-menu-container"/>

                </HeadMain>
            </HeadConteiner>
        </HeadSections>
    );
};
export default HeadSection;







