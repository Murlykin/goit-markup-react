import HeadSection from '../Head/index'
import HederSection from '../Header/index'
import SectiOn from '../Section/index'
import AboutSection from '../About/index'
import TeamSection from '../Team/index'
import ClientSection from '../Clients/index'
// import Modal from '../Modal/index'

// import FooterSections from '../Footer/index'


const Home = () => {
    return (
        <>
            <HeadSection />
            {/* <Modal /> */}
            <HederSection />
            <SectiOn />
            <AboutSection />
            <TeamSection />
            <ClientSection />
            {/* <FooterSections /> */}
        
        </>
    );
};

export default Home;