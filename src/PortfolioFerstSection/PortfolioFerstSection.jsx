import {
  PortTitle, PorUl, PorfolioLi, PorButton

} from "./PortfolioFerstSection.styled.js";

// import { useLocation } from "react-router-dom";

const PortfolioFerstSections = () => {
    // const location = useLocation();
    return (
<>
            <PortTitle>Портфоліо</PortTitle>
            <PorUl>
                <PorfolioLi> <PorButton>Усі</PorButton> </PorfolioLi>
                <PorfolioLi>
                    <PorButton>Веб-сайти</PorButton>
                </PorfolioLi>
                <PorfolioLi>
                    <PorButton>Додатки</PorButton>
                </PorfolioLi>
                <PorfolioLi>
                    <PorButton>Дизайн</PorButton>
                </PorfolioLi>
                <PorfolioLi>
                    <PorButton>Маркетинг</PorButton>
                </PorfolioLi>
            </PorUl>
</>
    );
};
export default PortfolioFerstSections;

