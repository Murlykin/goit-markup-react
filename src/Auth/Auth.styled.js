import styled from '@emotion/styled';


export const AuthNav = styled.ul`
    display: flex;
    margin-left: 93px;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: auto;
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
export const AuthSiteItams = styled.li`
    display: flex;
    margin-left: 93px;
    transition: color 250ms var(--timing - functione), fill 250ms var(--timing - functione);
    &:last-child {
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
    transition: opacity 250ms var(--timing-functione);}
        &:hover{
    color: var(--beckground-color);  }
`
    ;
export const AuthContakt = styled.a`
    font-family: 'Roboto', sans-serif;  
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color-p);
    position: relative;
    display: flex;
    align-content: center;
    padding-top: 32px;
    padding-bottom: 32px;
  
    @media screen and(min-width: 1200px) {
        padding-top: 32px;
        padding-bottom: 32px;
    }

`
    ;

export const AuthSvg = styled.svg`
    margin-right: 10px;
}
`
    ;