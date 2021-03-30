import { useState, useEffect } from 'react';
import axios from 'axios'

function Layout(props) {
  const [timeData, setTimeData] = useState('');
  useEffect(() => {
    let result =
    setInterval(() => {
     axios.get('https://worldtimeapi.org/api/ip').then(function (response) {
      result =  response.data
      setTimeData(result);
    })
  }, 10000)

  }, []);



  return(
    <div className={`h-screen bg-cover bg-no-repeat bg-center ${new Date(timeData.datetime).getHours() < 17 ? 'bg-desktop-day' : 'bg-desktop-night'}`}>
      <div className="bg-black bg-opacity-25 h-full pt-32">
        {props.children}
      </div>
    </div>

  )
}

export default Layout