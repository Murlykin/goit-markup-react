import './App.css'
import { Route, Routes, Navigate  } from 'react-router-dom';
import { routes } from "./routes";
import  Home  from './pages/Home';
import  Porfolio  from "./pages/portfolio";
import FooterSections from './Footer/index'

export const App = () => {
  return (
    <>
      <body>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PORTFOLIO} element={<Porfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <FooterSections />
      </body>
    </>
  );
};

export default App
