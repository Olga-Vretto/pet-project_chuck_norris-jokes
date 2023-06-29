import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/fetch';
import Button from '../../components/Button/Button';
import Quote from '../../components/Quote/Quote';
import { wrap } from 'module';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState([]);

  const fetchCategories = async () => {
    const data = await fetchData('categories');
    setCategories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = async (category) => {
    setIsLoading(true);
    const data = await fetchData('random?category=' + category);
  
    setQuote(data.value);
    setIsLoading(false);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
    <div style={{display:'flex', flexWrap:'wrap'}}>
    {categories.map((category,index) => (
        <Button
        key={index}
          onClick={() => {
           handleClick(category);
          }}
        >
          {category}
        </Button>
      ))}
    </div>
    <Quote>{quote}</Quote>
    </div>
  );
};

export default Main;
