import {
    SectionClients, ClientsComtainer, ClientsTitle, Client, ClientsItems, ClientsLinks, ClientsSvg,
} from "./Clients.styled";
import Icon from '../images/icons.svg';


const ClientSection = () => {
    return (
    <SectionClients>
        <ClientsComtainer>
            <ClientsTitle>Постійні клієнти</ClientsTitle>
            <Client>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg aria-label="іконка логотип" width="106" height="60">
                            <use href={Icon + '#icon-Logo'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg aria-label="іконка логотип" width="106" height="60">
                            <use href={Icon + '#icon-Logo-2'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg aria-label="іконка логотип" width="106" height="60">
                            <use href={Icon + '#icon-Logo-3'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg aria-label="іконка логотип" width="106" height="60">
                            <use href={Icon + '#icon-Logo-4'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg width="106" height="60">
                            <use href={Icon + '#icon-Logo-5'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
                <ClientsItems>
                    <ClientsLinks>
                        <ClientsSvg aria-label="іконка логотип" width="106" height="60">
                            <use href={Icon + '#icon-Logo-6'}></use>
                        </ClientsSvg>
                    </ClientsLinks>
                </ClientsItems>
            </Client>
        </ClientsComtainer>
    </SectionClients>
    );
};
export default ClientSection;