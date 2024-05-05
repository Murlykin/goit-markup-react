import {
    MobilButton, MobilButtonSvg, Mobil, MobilConteiner, MobilButtonClose, MobilMConteiner, MobilButtonIcons


} from "./Mobil.styled";
import Icon from '../images/icons.svg';
// import ContactCenter from "../images/Contact-center.png";


const MobilMenu = () => {
    return (<>
        <MobilButton type="button" class="js-open-menu">
            <MobilButtonSvg width="24" height="12">
                <use href={Icon + '#icon-menu'}></use>
            </MobilButtonSvg>
       </MobilButton>

        <Mobil>
          <MobilMConteiner>
            <MobilConteiner>
              <MobilButtonClose>
                <MobilButtonIcons> 
                                <use href={Icon + '#icon-close-menu'}></use>
                </MobilButtonIcons>
              </MobilButtonClose >
{/* <ul class="mobile-site-nav">
                <li class="mobile-site-nav__items">
                  <a href="./index.html" class="mobile-site-nav__link mobile-site-nav__link--current">Студія</a>
                </li>
                <li class="mobile-site-nav__items">
                  <a href="./portfolio.html" class="mobile-site-nav__link">Портфоліо</a>
                </li>
                <li class="mobile-site-nav__items">
                  <a href="" class="mobile-site-nav__link">Контакти</a>
                </li>
              </ul>
            </div>
            <div class="mobile-auth-nav__conteiner">
              <ul class="mobile-auth-nav">
                <li class="mobile-auth-nav__item">
                  <a class="mobile-auth-nav__link mobile-auth-nav__link--phone" href="tel:+380961111111">+38 096 111 11
                    11</a>
                </li>
                <li class="mobile-auth-nav__items">
                  <a class="mobile-auth-nav__link" href="mailto:info@devstudio.com">info@devstudio.com</a>
                </li>
              </ul>
              <ul class="mobile-soshmed">
                <li class="mobile-soshmed__item">
                  <a class="mobile-soshmed__link" href="#">Instagram</a>
                </li>
                <li class="mobile-soshmed__item">
                  <a class="mobile-soshmed__link" href="#">Twitter</a>
                </li>
                <li class="mobile-soshmed__item">
                  <a class="mobile-soshmed__link" href="#">Facebook</a>
                </li>
                <li class="mobile-soshmed__item">
                  <a class="mobile-soshmed__link" href="#">LinkedIn</a>
                </li>
              </ul>
                     */}






            </MobilConteiner>
          </MobilMConteiner>
        </Mobil>
    </>
    );
};
export default MobilMenu;

