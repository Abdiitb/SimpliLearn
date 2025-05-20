import { useEffect, useState } from 'react'

function useFetchCourse(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/course/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((error) => console.error(error.message))
  }, []);

  return data;
}

export { useFetchCourse }
