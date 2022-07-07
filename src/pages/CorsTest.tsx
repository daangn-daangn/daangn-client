import axios from 'axios';
import { useEffect } from 'react';

const CorsTestPage = () => {
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/health')
      .then((res) => console.log(res.data))
      .catch((err) => console.log('/api/health ERROR: ', err));

    axios
      .get('http://localhost:8880/chat/health')
      .then((res) => console.log(res.data))
      .catch((err) => console.log('/chat/health ERROR: ', err));
  }, []);
  return <div></div>;
};

export default CorsTestPage;
