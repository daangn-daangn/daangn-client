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
import LocationCheckPage from 'pages/Signup/LocationCheckPage/LocationCheckPage';
import LocationFindPage from 'pages/Signup/LocationFindPage/LocationFindPage';
import NickNameSettingPage from 'pages/Signup/NickNameSettingPage/NickNameSettingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="filter" element={<CategoryFilterPage />} />
          <Route path="image" element={<ImagePage />} />
          {/* <Route path="login" element={<LoginPage />} />
            <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} /> */}
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
  );
};

export default LoggedInRouter;
