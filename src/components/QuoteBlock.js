import { useState, useEffect } from 'react';
import axios from 'axios'

function QuoteBlock () {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    let result = axios.get('http://api.quotable.io/random').then(function (response) {
      result = response.data;
      setQuote(result);
    })
  }, []);

  return (
    <div className="max-w-2xl lg:ml-64 px-12">
      <p className="text-white font-light font-inter tracking-widest text-2xl mb-3">"{quote.content}"</p>
      <p className="text-white font-inter text-3xl font-bold tracking-wide">{quote.author}</p>
    </div>
  )
}

export default QuoteBlock