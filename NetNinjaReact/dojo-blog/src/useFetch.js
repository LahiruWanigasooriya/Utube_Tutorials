import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // in here use 'data' instead of 'blogs' cuz we can use commonly when it is 'data'

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsLoading(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return { data, isLoading, error };
}
 
export default useFetch;