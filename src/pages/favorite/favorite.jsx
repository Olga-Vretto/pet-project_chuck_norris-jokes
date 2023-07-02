import React from 'react';
import Quote from '../../components/Quote/Quote';
import { storageService } from '../../services/storage';

const Favorite = () => {
  const quote = storageService.getQuote();
  return (
    <Quote showLikeImage={false} justifyContent={false}>
      {quote}
    </Quote>
  );
};

export default Favorite;
