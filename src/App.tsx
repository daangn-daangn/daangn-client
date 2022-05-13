import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LocationCheckPage from 'pages/LocationCheckPage/LocationCheckPage';
import LocationFindPage from 'pages/LocationFindPage/LocationFindPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LocationCheckPage />} />
          <Route path="find" element={<LocationFindPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
