import { useEffect, useState } from "react";
import config from "../../config/config.js";

function useFetchAllCourses() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${config.backendApiUrl}/api/v1/course`)
            .then((res) => res.json())
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return data;
}

export { useFetchAllCourses };
