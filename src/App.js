import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:cc" element={<DetailsPage />} />
    </Routes>
  </Layout>
);

export default App;
