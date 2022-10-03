import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from '../components/MainPage';

const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default RouterApp;