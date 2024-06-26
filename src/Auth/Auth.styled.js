import styled from '@emotion/styled';


export const AuthNav = styled.ul`
    display: none;
    margin-left: auto;
    //  padding-right: 15px;   
    @media screen and (min-width:1200px) {
    padding-right: 15px;
    }


        @media screen and (min-width:768px) {
            display: block;
            margin-top: 10px;
        }
    
        @media screen and (min-width:1200px) {
            display: flex;
        }
`



export const AuthSiteItams = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover, 
  &:focus {
    color: var(--beckground-color);
    fill: var(--beckground-color);
  }
  @media screen and(min-width: 1200px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (min-width: 768px) {
    margin-left: 48px;
    padding-bottom: 10px;
  }
`;


    
export const AuthContakt = styled.a`
    font-family: 'Roboto', sans-serif;  
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--text-color-p);
    position: relative;
    // display: block;
    display: flex;
    align-content: center;
    //  margin-bottom: 10px;
    // padding-top: 32px;
   
    &:hover{
    color: var(--beckground-color); 
    fill: var(--beckground-color); }

    ;
`
export const AuthSvg = styled.svg`
    margin-right: 10px;
}
`
    ;