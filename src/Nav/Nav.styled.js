import styled from '@emotion/styled';
export const NavSections = styled.ul`
    display: flex;

    // margin-left: 93px;
    list-style: none;
// margin-left: -50px;
    transition: color 250ms var(--timing-functione), fill 250ms var(--timing-functione);
    & .site - nav__items: not(: last-child) {
        margin-right: 50px;
    }
    @media(min - width: 768px) {
        margin- eft: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
`
    ;
export const NavSiteItams = styled.li`
    display: flex;
    margin-left: 93px;
    transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin-right: 50px;
    }
    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--beckground-color);
    opacity: 0;
    margin-bottom: -1px;
   
    transition: opacity 250ms var(--timing-functione);
    }
    
    &:hover{
    color: var(--beckground-color);
    }
`
    ;





export const NavSiteLink = styled.a`
    font-family: 'Roboto', sans-serif; 
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
    &:hover{
    color: var(--beckground-color);  }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--beckground-color);
    opacity: 0;
    margin-bottom: -1px;
    transition: opacity 250ms var(--timing-functione);}
} 
`
    ;

export const NavSiteLinkAkcent = styled.a`
    color: var(--beckground - color);
`
    ;

export const AuthNav = styled.div`
    display: none;
    margin-left: auto;
    list-style: none;
    padding: 0;
    margin: 0;   
    // @media screen and(min-width: 1200px) {
    //     padding - right: 15px;
    // }

    // &:not(:first-child) {
    //     @media screen and(min- width: 1200px) {
    //         margin-left: 50px;
    //         margin-top: 0px;
    //     }
    // }
    // @media screen and(min-width: 768px) {
    //     display: block;
    //     margin-top: 10px;

    // }

    // @media screen and(min-width: 1200px) {
    //     display: flex;
    }
`
    ;
export const  AuthSiteItams = styled.li`
    display: flex;
    margin-left: 93px;
    transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
    &:not:last-child {
        margin - right: 50px;
    }
    @media(min-width: 768px) {
        margin-left: 88px;
    }
    @media(max-width: 767px) {
        display: none;
    }
    &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--beckground-color);
    opacity: 0;
    margin-bottom: -1px;
     opacity: 1;
    transition: opacity 250ms var(--timing-functione);}
        &:hover{
    color: var(--beckground-color);  }
`
    ;
export const AuthContakt = styled.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    display: block;
    padding-top: 32px;
    padding-bottom: 32px;

    @media screen and(min - width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }
}
`
    ;
/* =========================== nav ==========================*/



// .auth - nav {
//     display: none;
//     margin - left: auto;
//     //  padding-right: 15px;   
//     @media screen and(min - width: 1200px) {
//         padding - right: 15px;
//     }

//     & .auth - nav__items: not(: first - child) {
//         @media screen and(min - width: 1200px) {
//             margin - left: 50px;
//             margin - top: 0px;
//         }
//     }
//     @media screen and(min - width: 768px) {
//         display: block;
//         margin - top: 10px;

//     }

//     @media screen and(min - width: 1200px) {
//         display: flex;
//     }
// }
// .link - focus a {
//     transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
//     & a: hover,
//     & a:focus {
//         color: var(--beckground - color);
//         outline: none;
//     }
// }

// .site - nav__link,
// .auth - nav__contact {
//     font - weight: 500;
//     font - size: 14px;
//     line - height: 1.14;
//     letter - spacing: 0.02em;
//     text - decoration: none;
//     color: var(--text - color);
//     position: relative;
//     display: block;
//     padding - top: 32px;
//     padding - bottom: 32px;

//     @media screen and(min - width: 1200px) {
//         padding - top: 32px;
//         padding - bottom: 32px;
//     }
// }

// .auth - nav__contact {
//     display: flex;
//     align - items: center;
//     color: var(--text - color - p);
//     fill: var(--text - color - p);
//     margin - bottom: 10px;
//     padding - bottom: 0px;
//     padding - top: 0px;
// }

// .auth - nav__icones {
//     margin - right: 10px;
// }

// .site - nav__link: hover,
// .ite - nav__link: focus,
// .auth - nav a: hover,
// .auth - nav a:focus {
//     color: var(--beckground - color);
//     fill: var(--beckground - color);
// }

// .site - nav.site - nav__link::after {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     content: '';
//     display: block;
//     width: 100 %;
//     height: 4px;
//     border - radius: 2px;
//     background - color: var(--beckground - color);
//     opacity: 0;
//     margin - bottom: -1px;
//     transition: opacity 250ms var(--timing - functione);
// }

// .site - nav__link--accent {
//     color: var(--beckground - color);
// }

// .site - nav.site - nav__link: hover::after {
//     opacity: 1;
// }

// .site - nav.site - nav__link--accent::after {
//     opacity: 1;
// }