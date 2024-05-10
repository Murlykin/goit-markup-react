import styled from '@emotion/styled';
// import { NavLink } from "react-router-dom";
export const PorUlEleven = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -30px;

    @media screen and (max-width:768px) {
        margin-top: -30px;
    }
`;

export const PorfolioLi = styled.li`
        margin-left: 30px;
        position: relative;
        flex-basis: calc(100% / 1 -30px);
        margin-top: 30px;


        @media screen and (min-width:768px) {
            margin-left: 30px;
            flex-basis: calc(100% / 2 -30px);
        }

        @media screen and (min-width:1200px) {
            flex-basis: calc(100% / 3 -30px);
        }
`;
export const PorfolioDiscript= styled.div`
    position: relative;
    overflow: hidden;
`;
export const PorfolioParagraf = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(33, 150, 243, 0.9);
    padding: 0 24px;
    height: 100%;
    width: 100%;
    transition: transform 250ms var(--timing-functione);
    transform: translateY(101%);

    @media screen and(min-width: 768px) {
        align-items: center;
    }

`;

export const PorfolioCard= styled.p`
    margin: 0;
    color: var(--body-background-color);
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    &:hover,
    &:focus {
    transform: translateY(0);
    opacity: 1;
} 

`;
export const PorfolioCards = styled.div`
    display: block;
    padding: 24px 20px;
    // margin-top: 0;
    // margin-bottom: 0;
    outline: 2px solid var(--technical-color);
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    flex-grow: 1;
`;
export const PorfolioCardTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: $text-c;
    margin-top: 0px;
    margin-bottom: 4px;
    color: var(--text-color);
`;
export const PorfolioCardText = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: $text-c;
    margin-top: 0px;
    margin-bottom: 4px;
`;
export const PorfolioCardDecor = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 250ms var(--timing-functione);

    &:hover,
    &:focus {
        display: block;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
    }
}


`;