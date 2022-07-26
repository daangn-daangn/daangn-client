import axios from 'axios';
import { TOKEN_KEY } from 'constants/localstoregeKeys';
import SignupLayout from 'Layouts/SignupLayout';
import ChatPage from 'pages/Chat/ChatPage/ChatPage';
import ChatRoomPage from 'pages/Chat/ChatRoomPage/ChatRoomPage';
import LocationSharePage from 'pages/Chat/LocationSharePage/LocationSharePage';
import CategoryFilterPage from 'pages/Home/CategoryFilterPage/CategoryFilterPage';
import HomePage from 'pages/Home/HomePage/HomePage';
import SearchPage from 'pages/Home/SearchPage/SearchPage';
import ImagePage from 'pages/Image/ImagePage/ImagePage';
import NotificationPage from 'pages/Notification/NotificationPage/NotificationPage';
import CategotyPage from 'pages/Product/CategotyPage/CategotyPage';
import NewProductPage from 'pages/Product/NewProductPage/NewProductPage';
import ProductDetailPage from 'pages/Product/ProductDetailPage/ProductDetailPage';
import BuyHistoryPage from 'pages/Profile/BuyHistoryPage/BuyHistoryPage';
import LikeListPage from 'pages/Profile/LikeListPage/LikeListPage';
import MannerPage from 'pages/Profile/MannerPage/MannerPage';
import ProfileEditPage from 'pages/Profile/ProfileEditPage/ProfileEditPage';
import ProfilePage from 'pages/Profile/ProfilePage/ProfilePage';
import ReviewPage from 'pages/Profile/ReviewPage/ReviewPage';
import SellHistoryPage from 'pages/Profile/SellHistoryPage/SellHistoryPage';
import ReviewGivePage from 'pages/Review/ReviewGivePage/ReviewGivePage';
import SelectBuyerPage from 'pages/SelectBuyer/SelectBuyerPage/SelectBuyerPage';
import LocationCheckPage from 'pages/Signup/LocationCheckPage/LocationCheckPage';
import LocationFindPage from 'pages/Signup/LocationFindPage/LocationFindPage';
import NickNameSettingPage from 'pages/Signup/NickNameSettingPage/NickNameSettingPage';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedState, tokenState } from 'stores/Auth';

const LoggedInRouter = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);
  axios.defaults.headers.common['api_key'] = `Bearer ${token}`;
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.data.error.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setIsLogged(false);
        setToken('');
      }
      return Promise.reject(error);
    },
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="filter" element={<CategoryFilterPage />} />
          <Route path="image" element={<ImagePage />} />
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
          <Route path=":chatRoomId" element={<ChatRoomPage />} />
          <Route path="location/share" element={<LocationSharePage />} />
        </Route>
        <Route path="/profile">
          <Route path="edit" element={<ProfileEditPage />} />
          <Route path="sell" element={<SellHistoryPage />} />
          <Route path="buy" element={<BuyHistoryPage />} />
          <Route path="like" element={<LikeListPage />} />
          <Route path=":userId" element={<ProfilePage />} />
          <Route path=":userId/manner" element={<MannerPage />} />
          <Route path=":userId/review" element={<ReviewPage />} />
        </Route>
        <Route path="/notification">
          <Route path="" element={<NotificationPage />} />
        </Route>
        <Route path="/review">
          <Route path="give" element={<ReviewGivePage />} />
        </Route>
        <Route path="/select-buyer">
          <Route path=":productId" element={<SelectBuyerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedInRouter;
