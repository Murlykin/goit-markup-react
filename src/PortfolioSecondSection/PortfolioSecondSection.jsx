import {
  PorfolioLi, PorUlEleven, PorfolioCards,
  PorfolioCardTitle, PorfolioCardText,

} from "./PortfolioSecondSection.styled";
import Desktop from "../images/portfolio/img-desktop.jpg";
import Desktop2 from "../images/portfolio/img2-desktop.jpg";
import Desktop3 from "../images/portfolio/img3-desktop.jpg";
import Desktop4 from "../images/portfolio/img4-desktop.jpg";
import Desktop5 from "../images/portfolio/img5-desktop.jpg";
import Desktop6 from "../images/portfolio/img6-desktop.jpg";
import Desktop7 from "../images/portfolio/img7-desktop.jpg";
import Desktop8 from "../images/portfolio/img8-desktop.jpg";
import Desktop9 from "../images/portfolio/img9-desktop.jpg";


const PortfolioSecondSections = () => {
  // const location = useLocation();
  return (
    <>
      <PorUlEleven>
        <PorfolioLi>
          <a href={Desktop} alt="ноутбук" className="elements__decoration elements__picture">
            <div className="port__discript">
              <img src={Desktop} alt="ноутбук" />
              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Технокряк</PorfolioCardTitle>
              <PorfolioCardText>Веб-сайт</PorfolioCardText>
            </PorfolioCards>

          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop2} alt="баскетбол" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop2} alt="баскетбол" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>
                Постер <span lang="en">New Orlean vs Golden Star</span>
              </PorfolioCardTitle>
              <PorfolioCardText>Дизайн</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop3} alt="морська Іжа" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop3} alt="морська Іжа" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Ресторан <span lang="en">Seafood</span></PorfolioCardTitle>
              <PorfolioCardText>Додаток</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop4} alt="навушники" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop4} alt="навушники" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Проєкт <span lang="en">Prime</span></PorfolioCardTitle>
              <PorfolioCardText>Маркетинг</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop5} alt="дві коробки" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop5} alt="дві коробки" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Проєкт <span lang="en">Boxes</span></PorfolioCardTitle>
              <PorfolioCardText>Додаток</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop6} alt="монітор" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop6} alt="монітор" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle lang="en">Inspiration has no Borders</PorfolioCardTitle>
              <PorfolioCardText>Веб-сайт</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop7} alt="журнал" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop7} alt="журнал" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Видання <span lang="en">Limited Edition</span></PorfolioCardTitle>
              <PorfolioCardText>Дизайн</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop8} alt="бірка" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop8} alt="бірка" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle>Проєкт <span lang="en">LAB</span></PorfolioCardTitle>
              <PorfolioCardText>Маркетинг</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>

        <PorfolioLi>
          <a src={Desktop9} alt="робота" className="elements__decoration elements__picture">
            <div className="port__discript">

              <img src={Desktop9} alt="робота" />

              <div className="port__paragraph">
                <p className="port__curd">
                  Ресурс пропонує комплексні пропозиції з різним рівнем
                  функціоналу та сервісів. Все це дозволить відвідувачу
                  отримати вичерпні відомості про компанію чи приватну
                  особу.
                </p>
              </div>
            </div>
            <PorfolioCards>
              <PorfolioCardTitle lang="en">Growing Business</PorfolioCardTitle>
              <PorfolioCardText>Додаток</PorfolioCardText>
            </PorfolioCards>
          </a>
        </PorfolioLi>
      </PorUlEleven>
    </>
  );
};
export default PortfolioSecondSections;

