import { useState, useEffect } from "react";

const useFetchCustom = (url, options = {}) => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // make api call whenever url or options (payload/header/etc...) changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        // set the response data
        setRes(json);
      } catch (e) {
        // set the error data
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  // return response, error data and whether the api call is still in process
  return { res, error, isLoading };
};

export default useFetchCustom;
