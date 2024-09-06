import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
export const MobilButton = styled.button`
    display: inline-flex;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    line-height: 0;

    @media screen and (min-width:768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 796px;

    &.is-open {
        display: block;
    }
}

`
    ;

export const MobilButtonSvg = styled.svg`
`
    ;
export const Mobil = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    padding: 48px 40px;
    width: 100 %;
    height: 100 %;
    z-index: 100;
    background-color: var(--body-background-color);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 250ms var(--timing-functione),
        visibility 250ms var(--timing-functione);

`
    ;
export const MobilOpen = styled.div`
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

`
    ;


export const MobilMConteiner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100 %;
`
    ;

export const MobilConteiner = styled.div`
    margin-bottom: auto;
`
    ;

export const MobilButtonClose = styled.button`
    position: absolute;
    top: -25px;
    right: -25px;
    background-color: transparent;
    border: 0;
    padding: 0;
    line-height: 0;

    &:hover,
    &:focus {
        color: var(--body-background-color);
    }

`
export const MobilButtonIcons = styled.svg`
    width: 18.67px;
    height: 18.67px;

`
export const MobilLinc = styled(NavLink)`
  display: block;
  color: vap(--text-color);
  font-weight: 500;
  font-size: 40px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: color 250ms var(--timing-functione);

  &:hover,
  &:focus,
  &.current {
    color: var(--beckground-color);
  }
`

// .mobile-site-nav__link {
//     display: block;
//     color: $text-c;
//     font-weight: 500;
//     font-size: 40px;
//     line-height: 1.17;
//     letter-spacing: 0.02em;
//     text-decoration: none;
//     transition: color 250ms var(--timing-functione);

//   &: hover,
//   &: focus,
//   &.current {
//         color: var(--beckground-color);
//     }
// }





// .main-nav__mobile-menu.is-open {
//     opacity: 1;
//     visibility: visible;
//     pointer-events: auto;
// }

// .mobile - menu__conteiner {
//     position: relative;
//     display: flex;
//     flex - direction: column;
//     justify - content: space - between;
//     height: 100 %;
// }

// .mobile - menu__close - button {
//     position: absolute;
//     top: -25px;
//     right: -25px;
//     background - color: transparent;
//     border: 0;
//     padding: 0;
//     line - height: 0;

//   &: hover,
//   &:focus {
//         color: var(--body - background - color);
//     }
// }

// .mobile - menu__close - icone {
//     width: 18.67px;
//     height: 18.67px;
// }

// .mobile - site - nav__conteiner {
//     margin - bottom: auto;
// }

// .mobile - site - nav {
//     margin - bottom: auto;
//     list - style: none;
// }

// .mobile - site - nav__items {
//     margin - bottom: 32px;
// }

// .mobile - site - nav__link {
//     display: block;
//     color: $text - c;
//     font - weight: 500;
//     font - size: 40px;
//     line - height: 1.17;
//     letter - spacing: 0.02em;
//     text - decoration: none;
//     transition: color 250ms var(--timing - functione);

//   &: hover,
//   &: focus,
//   &.current {
//         color: var(--beckground - color);
//     }
// }

// .mobile - site - nav__link--current {
//     color: var(--beckground - color);
// }

// .mobile - auth - nav {
//     list - style: none;
// }

// .mobile - auth - nav__link {
//     display: block;
//     color: var(--text - color - p);
//     font - weight: 500;
//     font - size: 24px;
//     line - height: 1.16;
//     letter - spacing: 0.02em;
//     text - decoration: none;
//     margin - bottom: 64px;
// }

// .mobile - auth - nav__link--phone {
//     display: block;
//     color: var(--beckground - color);
//     font - weight: 500;
//     font - size: 34px;
//     line - height: 1.17;
//     letter - spacing: 0.02em;
//     text - decoration: none;
//     margin - bottom: 32px;
//     @media screen and(max - width: 379px) {
//         font - weight: 400;
//     }
// }

// .mobile - soshmed {
//     display: flex;
//     flex - wrap: wrap;
// }

// .mobile - soshmed__item: first - child.mobile - soshmed__link {
//     padding - left: 0 %;
// }

// .mobile - soshmed__item: last - child.mobile - soshmed__link {
//     border - right: none;
// }

// .mobile - soshmed__link {
//     display: block;
//     color: var(--beckground - color);
//     font - weight: 500;
//     font - size: 18px;
//     line - height: 1.22;
//     letter - spacing: 0.02em;
//     text - decoration: none;
//     padding - left: 10px;
//     padding - right: 10px;
//     border - right: 1px solid rgba(33, 33, 33, 0.2);
// }

// .mobile - soshmed__link: not(: first - child) {
//     padding - left: 10px;

// }

// .mobile - soshmed__link: not(: last - child) {
//     border - right: 1px solid rgba(33, 33, 33, 0.2);
// }





