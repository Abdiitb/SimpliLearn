import { useEffect, useState } from 'react'
import config from '../../config/config.js';

function useFetchCourse(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${config.backendApiUrl}/api/v1/course/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((error) => console.error(error.message))
  }, []);

  return data;
}

export { useFetchCourse }
