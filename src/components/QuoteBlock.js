import { useState, useEffect } from 'react';
import axios from 'axios'
import refreshIcon from '../assets/desktop/icon-refresh.svg'

function QuoteBlock () {
  const [quote, setQuote] = useState('');

  function getData () {
    axios.get('https://api.quotable.io/random').then(function (response) {
      let result = response.data;
      setQuote(result);
    })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="max-w-2xl lg:ml-64 px-12 flex flex-row">
      <div>
        <p className="text-white font-light font-inter tracking-widest text-2xl mb-3">"{quote.content}"</p>
        <p className="text-white font-inter text-3xl font-bold tracking-wide">{quote.author}</p>
      </div>
      <img className="w-7 h-7 cursor-point ml-4" onClick={getData} src={refreshIcon} alt="refresh icon"/>
    </div>
  )
}

export default QuoteBlock