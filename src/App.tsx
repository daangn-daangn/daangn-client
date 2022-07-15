import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignupLayout from 'Layouts/SignupLayout';
import LocationCheckPage from 'pages/Signup/LocationCheckPage/LocationCheckPage';
import LocationFindPage from 'pages/Signup/LocationFindPage/LocationFindPage';
import NickNameSettingPage from 'pages/Signup/NickNameSettingPage/NickNameSettingPage';

import ChatRoomPage from 'pages/Chat/ChatRoomPage/ChatRoomPage';
import LocationSharePage from 'pages/Chat/LocationSharePage/LocationSharePage';

import ProductDetailPage from 'pages/Product/ProductDetailPage/ProductDetailPage';
import NewProductPage from 'pages/Product/NewProductPage/NewProductPage';
import CategotyPage from 'pages/Product/CategotyPage/CategotyPage';

import SearchPage from 'pages/Home/SearchPage/SearchPage';
import CategoryFilterPage from 'pages/Home/CategoryFilterPage/CategoryFilterPage';

import ProfilePage from 'pages/Profile/ProfilePage/ProfilePage';
import ProfileEditPage from 'pages/Profile/ProfileEditPage/ProfileEditPage';
import SellHistoryPage from 'pages/Profile/SellHistoryPage/SellHistoryPage';
import BuyHistoryPage from 'pages/Profile/BuyHistoryPage/BuyHistoryPage';
import LikeListPage from 'pages/Profile/LikeListPage/LikeListPage';
import ReviewPage from 'pages/Profile/ReviewPage/ReviewPage';
import MannerPage from 'pages/Profile/MannerPage/MannerPage';
import NotificationPage from 'pages/Notification/NotificationPage/NotificationPage';

import ImagePage from 'pages/Image/ImagePage/ImagePage';
import HomePage from 'pages/Home/HomePage/HomePage';
import ChatPage from 'pages/Chat/ChatPage/ChatPage';

import LoginPage from 'pages/Login/LoginPage/LoginPage';
import OAuth2RedirectHandler from 'utils/KakaoLogin/OAuth2RedirectHandeler';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="">
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="filter" element={<CategoryFilterPage />} />
            <Route path="image" element={<ImagePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />
          </Route>
          <Route path="signup" element={<SignupLayout />}>
            <Route path="nickname" element={<NickNameSettingPage />} />
            <Route path="location" element={<LocationCheckPage />} />
            <Route path="location/find" element={<LocationFindPage />} />
          </Route>
          <Route path="/product">
            <Route path="new" element={<NewProductPage />} />
            <Route path="new/category" element={<CategotyPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="/chat">
            <Route path="" element={<ChatPage />} />
            <Route path=":id" element={<ChatRoomPage />} />
            <Route path="location/share" element={<LocationSharePage />} />
          </Route>
          <Route path="/profile">
            <Route path="" element={<ProfilePage />} />
            <Route path="edit" element={<ProfileEditPage />} />
            <Route path="sell" element={<SellHistoryPage />} />
            <Route path="buy" element={<BuyHistoryPage />} />
            <Route path="like" element={<LikeListPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="manner" element={<MannerPage />} />
          </Route>
          <Route path="/notification">
            <Route path="" element={<NotificationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
