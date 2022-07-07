import axios from 'axios';
import { useEffect } from 'react';

const CorsTestPage = () => {
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/health')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .get('http://localhost:8080/chat/health')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};

export default CorsTestPage;
