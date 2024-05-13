import PortfolioSection from '../HeadPortfolio/index'
import PortfolioFerstSections from '../PortfolioFerstSection/index'
import {Section, PortConteiner } from '../PortfolioFerstSection/PortfolioFerstSection.styled'
import { Suspense } from 'react';
import PortfolioSecondSections from '../PortfolioSecondSection/index'
// import FooterSections from '../Footer/index'
import { Outlet } from 'react-router-dom';

const Porfolio = () => {
  return (
    <>
      <PortfolioSection />
      <Section >
        <PortConteiner>
        <PortfolioFerstSections />
        <PortfolioSecondSections />
        </PortConteiner>
      </Section>
      {/* <FooterSections /> */}


      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Porfolio;