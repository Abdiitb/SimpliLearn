import { useEffect, useState } from 'react'

function useFetchBlog(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/blog/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((error) => console.error(error.message))
  }, []);

  return data;
}

export { useFetchBlog }
