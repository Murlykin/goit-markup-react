import { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Icon from '../images/icons.svg';

const MobilMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Управляем атрибутом aria-expanded и классом is-open
    const openMenuBtn = document.querySelector('.js-open-menu');
    openMenuBtn.setAttribute('aria-expanded', isMenuOpen);

    const mobileMenu = document.querySelector('.js-menu-container');
    if (isMenuOpen) {
      mobileMenu.classList.add('is-open');
      disableBodyScroll(document.body);
    } else {
      mobileMenu.classList.remove('is-open');
      enableBodyScroll(document.body);
    }

    // Слушаем изменение ширины экрана
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => {
      if (e.matches) {
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        enableBodyScroll(document.body);
        setIsMenuOpen(false);
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // Убираем слушатель при размонтировании компонента
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [isMenuOpen]);


  return (<>
        <button type="button" className="main-nav__button js-open-menu" aria-expanded="false" onClick={toggleMenu}>
          <svg width="24" height="16" aria-label="перемикач мобільного меню">
            <use className="main-nav__icone--menu" href={Icon + '#icon-menu'}></use>
          </svg>
    </button>

        <div className="main-nav__mobile-menu js-menu-container">
          <div className="mobile-menu__conteiner">
            <div className="mobile-site-nav__conteiner">
              <button className="mobile-menu__close-button js-close-menu" onClick={toggleMenu}>
            <svg className="mobile-menu__close-icone">
              <use className="main-nav__icone--menu" href={Icon + '#icon-close-menu'}></use>
            </svg>
              </button>
              <ul className="mobile-site-nav">
                <li className="mobile-site-nav__items">
                  <a href="./index.html" className="mobile-site-nav__link ">Студія</a>
                </li>
                <li className="mobile-site-nav__items">
                  <a href="./portfolio.html" className="mobile-site-nav__link mobile-site-nav__link--current">Портфоліо</a>
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
    </>
    );
};
export default MobilMenu;

