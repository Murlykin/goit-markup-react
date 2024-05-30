import { HeaderSection,
HeaderConteiner, HeaderText, HeaderButton
} from "./Heder.styled";
// import Icon from '../images/icons.svg'; 
// import ContactCenter from "../images/";

const HederSection = () => {
    return (
    <HeaderSection>
      <HeaderConteiner>
        <HeaderText>
          Ефективні рішення для <br />
          вашого бізнесу
        </HeaderText>
          <HeaderButton type="button" id="data-modal-open">Замовити послугу</HeaderButton>

</HeaderConteiner>
</HeaderSection>

    );
};
export default HederSection;
