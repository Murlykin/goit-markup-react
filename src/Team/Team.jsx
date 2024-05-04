import {
    SectionTeam, TeamConteiner, TeamTitle, TeamD, TeamsDIrems, TeamsContainer, TeamsHeder, TeamsText, TeamsSochmed,
    TeamsItem, TeamsLinks, TeamsSvg,
} from "./Team.styled";
import Icon from '../images/icons.svg';
import Mykola from "../images/product-designer-mobile.jpg";
import Olga from "../images/frontend-developer-mobile.jpg";
import Torasov from "../images/marketing-mobile.jpg";
import Mykhailo from "../images/ui-mobile.jpg";
// import About2 from "../images/photo_2022-07-14_23-08-23.jpg";
// import About3 from "../images/photo_2022-07-14_23-08-29.jpg";

const TeamSection = () => {
    return (
        <SectionTeam>
            <TeamConteiner class="animate__animated animate__fadeInUp wow" data-wow-offset="100">
                <TeamTitle>Наша команда</TeamTitle>
                <TeamD>
                    <TeamsDIrems>
                        <img src={Mykola} alt="mikola-tarasov-photo" />
                        <TeamsContainer>
                            <TeamsHeder>Ігор Дем`яненко</TeamsHeder>
                            <TeamsText lang="en">Product Designer</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>
                    <TeamsDIrems>
                        <img src={Olga} alt="mikola-tarasov-photo" />
                        <TeamsContainer>
                            <TeamsHeder>Ольга Рєпіна</TeamsHeder>
                            <TeamsText lang="en">Frontend Developer</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>
                    <TeamsDIrems>
                        <img src={Torasov} alt="mikola-tarasov-photo" />
                        <TeamsContainer>
                            <TeamsHeder>Микола Тарасов</TeamsHeder>
                            <TeamsText lang="en">Marketing</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>
                    <TeamsDIrems>
                        <img src={Mykhailo} alt="mikola-tarasov-photo" />
                        <TeamsContainer>
                            <TeamsHeder>Михайло Єрмаков</TeamsHeder>
                            <TeamsText lang="en">UI Designer</TeamsText>
                            <TeamsSochmed >
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка інстаграм" width="20" height="20">
                                            <use href={Icon + '#icon-instagram'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка твітер" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-tviter'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка феїсбук" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-facebook'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                                <TeamsItem>
                                    <TeamsLinks>
                                        <TeamsSvg aria-label="іконка линкедін" class="icones" width="20" height="20">
                                            <use href={Icon + '#icon-linkedin'}></use>
                                        </TeamsSvg>
                                    </TeamsLinks>
                                </TeamsItem>
                            </TeamsSochmed >
                        </TeamsContainer>
                    </TeamsDIrems>
                </TeamD>
            </TeamConteiner>
        </SectionTeam>
    );
};
export default TeamSection;
