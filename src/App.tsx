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
import ChatRoomPage from 'pages/ChatRoomPage/ChatRoomPage';
import CategoryFilterPage from 'pages/CategoryFilterPage/CategoryFilterPage';

import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';
import SellHistoryPage from 'pages/SellHistoryPage/SellHistoryPage';
import BuyHistoryPage from 'pages/BuyHistoryPage/BuyHistoryPage';
import LikeListPage from 'pages/LikeListPage/LikeListPage';
import ReviewPage from 'pages/ReviewPage/ReviewPage';
import MannerPage from 'pages/MannerPage/MannerPage';

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
          <Route path="/chat">
            <Route path="room" element={<ChatRoomPage />} />
          </Route>
          <Route path="filter" element={<CategoryFilterPage />} />
          <Route path="/profile">
            <Route path="" element={<ProfilePage />} />
            <Route path="edit" element={<ProfileEditPage />} />
            <Route path="sell" element={<SellHistoryPage />} />
            <Route path="buy" element={<BuyHistoryPage />} />
            <Route path="like" element={<LikeListPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="manner" element={<MannerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
