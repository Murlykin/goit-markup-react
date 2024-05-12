import './App.css'
import { Route, Routes, Navigate  } from 'react-router-dom';
import { routes } from "./routes";
import  Home  from './pages/Home';
import  Porfolio  from "./pages/portfolio";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PORTFOLIO} element={<Porfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="portfolio" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App
