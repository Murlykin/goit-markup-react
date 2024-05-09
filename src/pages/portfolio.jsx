import PortfolioSection from '../HeadPortfolio/index'
import { Suspense } from 'react';
import FooterSections from '../Footer/index'
import { Outlet } from 'react-router-dom';

const Porfolio = () => {
    return (
        <>
            <PortfolioSection />
<>ПРИВЕТ</>
            <FooterSections />
        
       
             <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> </>
    );
};

export default Porfolio;