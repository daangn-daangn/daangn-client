import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedState } from 'stores/Auth';

const useLogOut = () => {
  const navigate = useNavigate();
  const isLogged = useRecoilValue(isLoggedState);
  useEffect(() => {
    if (!isLogged) navigate('/');
  }, [isLogged]);
};

export default useLogOut;
