import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components/Layout/Layout';
const WomenPage = lazy(() => import('pages/WomenPage/WomenPage'));

// const MasksPage = lazy(() => import('pages/MasksPage/MasksPage'));
const ShirtsPage = lazy(() => import('pages/ShirtsPage/ShirtsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShirtsPage />} />
        <Route path="womenpage" element={<WomenPage />} />
        {/* <Route path="maskspage" element={<MasksPage />} /> */}
        <Route path="*" element={<ShirtsPage />} replace={true} />
      </Route>
    </Routes>
  );
};

export default App;
