import HeadSection from '../Head/index'
import { Suspense } from 'react';
import FooterSections from '../Footer/index'
import { Outlet } from 'react-router-dom';

const Porfolio = () => {
    return (
        <>
            <HeadSection />
<>ПРИВЕТ</>
            <FooterSections />
        
       
             <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> </>
    );
};

export default Porfolio;