import { isLoggedState } from 'stores/Auth';
import LoggedInRouter from 'routers/logged-in-router';
import LoggedOutRouter from 'routers/logged-out-router';
import { useRecoilValue } from 'recoil';

function App() {
  const isLoggedIn = useRecoilValue(isLoggedState);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
