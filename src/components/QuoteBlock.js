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
    <div>
      <p className="text-white font-inter">{quote.content}</p>
      <p className="text-white">{quote.author}</p>
    </div>
  )
}

export default QuoteBlock