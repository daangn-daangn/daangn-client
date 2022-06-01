import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignupLayout from 'Layouts/SignupLayout';
import LocationCheckPage from 'pages/LocationCheckPage/LocationCheckPage';
import LocationFindPage from 'pages/LocationFindPage/LocationFindPage';
import NickNameSettingPage from 'pages/NickNameSettingPage/NickNameSettingPage';

import Applayout from 'Layouts/AppLayout';
import LocationSharePage from 'pages/LocationSharePage/LocationSharePage';

import ProductDetailPage from 'pages/ProductDetailPage/ProductDetailPage';
import NewProductPage from 'pages/NewProductPage/NewProductPage';
import CategotyPage from 'pages/CategotyPage/CategotyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Applayout />}>
            <Route path="location/share" element={<LocationSharePage />} />
          </Route>
          <Route path="signup" element={<SignupLayout />}>
            <Route path="nickname" element={<NickNameSettingPage />} />
            <Route path="location" element={<LocationCheckPage />} />
            <Route path="location/find" element={<LocationFindPage />} />
          </Route>
          <Route path="/product">
            <Route path="detail" element={<ProductDetailPage />} />
            <Route path="new" element={<NewProductPage />} />
            <Route path="new/category" element={<CategotyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
