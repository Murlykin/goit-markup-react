import PortfolioSection from '../HeadPortfolio/index'
// import { PortfolioFerstSections } from '../PortfolioFerstSection/index'
import { Suspense } from 'react';
import FooterSections from '../Footer/index'
import { Outlet } from 'react-router-dom';

const Porfolio = () => {
  return (
    <>
      <PortfolioSection />
      {/* <PortfolioFerstSections /> */}

      <FooterSections />


      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Porfolio;