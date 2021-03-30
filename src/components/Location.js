import { useState, useEffect } from 'react';
import axios from 'axios'

function CurrentLocation() {
  const [locationData, setLocationData] = useState('');

  useEffect(() => {
    let result =
    setInterval(() => {
     axios.get('https://freegeoip.app/json/').then(function (response) {
      result = response.data;
      setLocationData(result);
    })
  }, 5000)
  }, []);

  return(
    <div className="mb-auto">
      <p className=" font-medium tracking-widest text-white text-3xl md:text-4xl uppercase">IN {locationData.city}, {locationData.country_name}</p>
    </div>

  )
}

export default CurrentLocation