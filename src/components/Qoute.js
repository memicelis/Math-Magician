/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react';
import './Qoute.css';

const Quote = () => {
  const [data, setData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=courage',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'JTRJE6iIHXirtAv4CPKuQQ==Nksxnez1O3tFJNL3',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="quote">
      <p>{data[0].quote}</p>
      <p>{data[0].author}</p>
    </div>
  );
};

export default Quote;
