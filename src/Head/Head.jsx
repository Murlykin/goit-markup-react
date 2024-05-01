import {
    HeadSections,
    HeadSectionsLogoColor, HeadSectionsLogo, HeadConteiner, HeadMain

} from "./Head.styled.js";

import NavSection from '../Nav/index.js';
import AuthSection from '../Auth/index.js';
// import ContactCenter from "../images/Contact-center.png";

// const element = document.getElementById("anime");
// element.classList.add('animate__animated', 'animate__bounceOutLeft');

const HeadSection = () => {
    return ( 
        <HeadSections>
            <HeadConteiner>
            <HeadMain>
            <HeadSectionsLogo href="index.html" lang="en" data-wow-offset="100">
            <HeadSectionsLogoColor>Web</HeadSectionsLogoColor >Studio</HeadSectionsLogo>
                    <> <NavSection /> <AuthSection /></> 

                </HeadMain>
            </HeadConteiner>
        </HeadSections>
           
    );
};
export default HeadSection;







