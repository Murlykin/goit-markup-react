import {
    HeadSections,
    HeadSectionsLogoColor, HeadSectionsLogo, HeadConteiner, HeadMain

} from "./HeadPortfolio.styled.js";
import MobilMenu from '../Mobil/index'
import NavPortfolio from '../NavPortfolio/index.js';
import AuthSection from '../Auth/index.js';
import { useLocation } from "react-router-dom";

const PortfolioSection = () => {
    const location = useLocation();
    return ( 
        <HeadSections>
            <HeadConteiner>
            <HeadMain>
            <HeadSectionsLogo to="/" state={{ from: location }} lang="en" data-wow-offset="100">
            <HeadSectionsLogoColor>Web</HeadSectionsLogoColor >Studio</HeadSectionsLogo>
                    <> <NavPortfolio /> <AuthSection /></> <MobilMenu id="js-menu-container"/>

                </HeadMain>
            </HeadConteiner>
        </HeadSections>
    );
};
export default PortfolioSection;


