import { useEffect, useState } from "react";

function useFetchAllCourses() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/v1/course")
            .then((res) => res.json())
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return data;
}

export { useFetchAllCourses };
