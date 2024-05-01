import {SectionAbout, AboutConteiner, AboutTitle, AboutD, AboutDIrems, AbouImg, AbouP
 
} from "./About.styled";
// import Icon from '../images/icons.svg';
import About1 from "../images/photo_2022-07-14_23-06-50.jpg";
import About2 from "../images/photo_2022-07-14_23-08-23.jpg";
import About3 from "../images/photo_2022-07-14_23-08-29.jpg";

const AboutSection = () => {
  return (
    <SectionAbout>
      <AboutConteiner>
        <AboutTitle>Чим ми займаємося</AboutTitle>
        <AboutD>
          <AboutDIrems>
            <a href={About1}>
              <AbouImg src={About1} alt="photo" width="370" height="294"
                /></a>
            <AbouP>Десктопні додатки</AbouP>
          </AboutDIrems>
          <AboutDIrems>
            <a href={About2}>
              <AbouImg  src={About2} alt="photo" width="370" height="294"
                /></a>
            <AbouP>Мобільні додатки</AbouP>
          </AboutDIrems>
          <AboutDIrems>
            <a href={About3}>
              <AbouImg  src={About3} alt="photo" width="370" height="294"
                /></a>
            <AbouP>Дизайнерські рішення</AbouP>
          </AboutDIrems>
        </AboutD>
      </AboutConteiner>
    </SectionAbout>
        
    );
};
export default AboutSection;
