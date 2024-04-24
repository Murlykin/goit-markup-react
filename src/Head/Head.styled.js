import styled from '@emotion/styled';
export const HeadSections = styled.header`
    background-color: var(--body-background-color);
    border-bottom: 1px solid;
    color: #ececec;
`
    ;
export const HeadConteiner = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    outline: 2px solid var(--technical-color);

    @media screen and (min-width:480px) {
        width: 480px;
    }
    @media screen and (min-width:768px) {
        min-width: 768px;
    }
    @media screen and (min-width:1200px) {
        min-width: 1200px;
    }
`
    ;

export const HeadSectionsLogo = styled.a`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.16;
    letter-spacing: 0.03em;
    color: var(--text-color);
    text-decoration: none;
    @media (min-width:1200px) {
            font-size: 26px;
            line-height: 1.19;
`;

export const HeadSectionsLogoColor = styled.span`
    color: var(--beckground-color);
`;

export const HeadMain = styled.div`
    display: flex;
    align-items: center;

    padding: 0 15px;
    // justify-content: space-between;
    @media(max-width: 767px) {
        margin-top: 16px;
        justify-content: space-between;
        margin-bottom: 16px;
    }

`;


// .conteiner-top {
//     height: 80px;
// }

// .head-sectione__logo {
//     font-family: 'Raleway';
//     font-weight: 700;
//     font-size: 24px;
//     line-height: 1.16;
//     letter-spacing: 0.03em;
//     color: var(--text-color);
//     text-decoration: none;
//     @media (min-width:1200px) {
//             font-size: 26px;
//             line-height: 1.19;
//         }
// }

// .head-sectione__logo--color {
//     color: var(--beckground-color);
// 
