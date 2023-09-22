import React, { useState, useEffect } from "react";

const UseFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error("The Data is Unable To Fetch");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err.message);
        setIsLoading(false);
        setData(null);
      });
  }, [URL]);

  return { data, isLoading, isError };
};

export default UseFetch;
