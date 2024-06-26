// import Icon from '../images/icons.svg';
import { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { MobilLinc } from "./Mobil.styled";
import {  useLocation } from "react-router-dom";

  const MobilMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
          const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
      
  }, [navbarOpen]);
    return (<>
<nav ref={ref} className="navbar">
      <button className="main-nav__button " onClick={() => setNavbarOpen((prev) => !prev)}>
      {navbarOpen ? (
    <MdClose style={{ width: '32px', height: '32px' }} />
  ) : (
    <FiMenu className="main-nav__icone--menu"
      style={{ width: '32px', height: '32px', }} />
  )}
      </button>
    
      <div className={`menu-nav${navbarOpen ? ' show-menu ' : ''}`}>
        
          <div className="mobile-menu__conteiner">
            <div className="mobile-site-nav__conteiner">

              <ul className="mobile-site-nav">
                <li className="mobile-site-nav__items">
                  <MobilLinc to="/" state={{ from: location }}>Студія</MobilLinc>
                </li>
                <li className="mobile-site-nav__items">
                  <MobilLinc to="/portfolio" state={{ from: location }}>Портфоліо</MobilLinc>
                </li>
                <li className="mobile-site-nav__items">
                  <a href="" className="mobile-site-nav__link">Контакти</a>
                </li>
              </ul>
            </div>
            <div className="mobile-auth-nav__conteiner">
              <ul className="mobile-auth-nav">
                <li className="mobile-auth-nav__item">
                  <a className="mobile-auth-nav__link mobile-auth-nav__link--phone" href="tel:+380961111111">+38 096 111 11
                    11</a>
                </li>
                <li className="mobile-auth-nav__items">
                  <a className="mobile-auth-nav__link" href="mailto:info@devstudio.com">info@devstudio.com</a>
                </li>
              </ul>
              <ul className="mobile-soshmed">
                <li className="mobile-soshmed__item">
                  <a className="mobile-soshmed__link" href="#">Instagram</a>
                </li>
                <li className="mobile-soshmed__item">
                  <a className="mobile-soshmed__link" href="#">Twitter</a>
                </li>
                <li className="mobile-soshmed__item">
                  <a className="mobile-soshmed__link" href="#">Facebook</a>
                </li>
                <li className="mobile-soshmed__item">
                  <a className="mobile-soshmed__link" href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>        
      </nav>
    </>
    );
};
export default MobilMenu;

