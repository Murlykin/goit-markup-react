import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from "./routes";
import  Home  from './pages/Home';
import  Porfolio  from "./pages/portfolio";
import FooterSections from './Footer/index'

export const App = () => {
  const navigate = useNavigate();
  return (
    <>
         <button onClick={() => navigate('/')}>Home</button>
   <button onClick={() => navigate('/porfolio')}>About</button>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PORTFOLIO} element={<Porfolio />} />
        
        </Routes>
        <FooterSections />
     
    </>
  );
};

export default App
