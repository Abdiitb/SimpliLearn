import { useEffect, useState } from 'react'
import config from '../../config/config.js';

function useFetchAllBlogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${config.backendApiUrl}/api/v1/blog`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((error) => console.error(error.message))
  }, []);

  return data;
}

export { useFetchAllBlogs }
