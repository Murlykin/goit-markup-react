import {
    Section, SectionConteiner, SectionTitle, SectionD, SectionDIrems, SectionDIcones, SectionDIcone, SectionHeder, SectionText,
} from "./Section.styled";
import Icon from '../images/icons.svg';
// import ContactCenter from "../images/";

const SectiOn = () => {
    return (
        <Section>
            <SectionConteiner>
                <SectionTitle>Опис діятельності</SectionTitle>
                <SectionD>
                    <SectionDIrems>
                        <SectionDIcones>
                            <SectionDIcone width="70" height="70">
                                <use href={Icon + '#antenna'}></use>
                            </SectionDIcone>
                        </SectionDIcones>
                        <SectionHeder>УВАГА ДО ДЕТАЛЕЙ</SectionHeder>
                        <SectionText>
                            Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.
                        </SectionText>
                    </SectionDIrems>
                    <SectionDIrems>
                        <SectionDIcones>
                            <SectionDIcone width="70" height="70">
                                <use href={Icon + '#clock'}></use>
                            </SectionDIcone>
                        </SectionDIcones>
                        <SectionHeder>ПУНКТУАЛЬНІСТЬ</SectionHeder>
                        <SectionText>
                            Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.
                        </SectionText>
                    </SectionDIrems>
                    <SectionDIrems>
                        <SectionDIcones>
                            <SectionDIcone width="70" height="70">
                                <use href={Icon + '#diagram'}></use>

                            </SectionDIcone>
                        </SectionDIcones>
                        <SectionHeder>ПЛАНУВАННЯ</SectionHeder>
                        <SectionText>
                            Так само консультація з широким активом значною мірою зумовлює.
                        </SectionText>
                    </SectionDIrems>
                    <SectionDIrems>
                        <SectionDIcones>
                            <SectionDIcone width="70" height="70">
                                <use href={Icon + '#astronaut'}></use>

                            </SectionDIcone>
                        </SectionDIcones>
                        <SectionHeder>СУЧАСНІ ТЕХНОЛОГІЇ</SectionHeder>
                        <SectionText>
                            Значимість цих проблем настільки очевидна, що реалізація планових завдань.
                        </SectionText>
                    </SectionDIrems>
                </SectionD>
            </SectionConteiner>
        </Section>

    );
};
export default SectiOn;
