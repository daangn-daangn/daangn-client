import axios from 'axios';
import { useEffect } from 'react';

const CorsTestPage = () => {
  useEffect(() => {
    axios
      .get('/api/health')
      .then((res) => {
        console.log(res.data);
        console.log(`${process.env.REACT_APP_TEST_VARIABLE}`);
      })
      .catch((err) => console.log('/api/health ERROR: ', err));

    axios
      .get('/chat/health')
      .then((res) => {
        console.log(res.data);
        console.log(`${process.env.REACT_APP_TEST_VARIABLE}`);
      })
      .catch((err) => console.log('/chat/health ERROR: ', err));
  }, []);
  return <div></div>;
};

export default CorsTestPage;
