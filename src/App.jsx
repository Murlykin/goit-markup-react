import './App.css'
import { Route, Routes } from 'react-router-dom';
import { routes } from "./routes";
import  Home  from './pages/Home';
import  Porfolio  from "./pages/portfolio";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PORTFOLIO} element={<Porfolio />} />
      </Routes>
    </>
  );
};

export default App
