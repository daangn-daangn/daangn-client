import LoginPage from 'pages/Login/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OAuth2RedirectHandler from 'utils/KakaoLogin/OAuth2RedirectHandeler';
const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="/" element={<LoginPage />} />
          <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedOutRouter;
