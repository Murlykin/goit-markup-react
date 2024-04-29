import {
    HeadSections,
    HeadSectionsLogoColor, HeadSectionsLogo, HeadConteiner, HeadMain

} from "./Head.styled.js";
import NavSection from '../Nav/index.js'
import AuthSection from '../Auth/index.js'
// import ContactCenter from "../images/Contact-center.png";


const HeadSection = () => {
    return ( 
        <HeadSections>
            <HeadConteiner>
            <HeadMain>
            <HeadSectionsLogo href="index.html" lang="en">
            <HeadSectionsLogoColor>Web</HeadSectionsLogoColor >Studio</HeadSectionsLogo>
                    <> <NavSection /> <AuthSection /></> 

                </HeadMain>
            </HeadConteiner>
        </HeadSections>
           
    );
};
export default HeadSection;






