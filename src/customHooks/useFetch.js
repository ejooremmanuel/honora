import { useState, useEffect } from "react";

const useFetched = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    url().then((data) => {
      setData(data.data);
    });
  }, [url]);

  return { data };
};

export default useFetched;
