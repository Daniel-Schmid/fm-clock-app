import { useState, useEffect } from 'react';
import axios from 'axios'
import Greeting from './Greeting'
import CurrentTime from './CurrentTime'
import ExtraInfo from './ExtraInfo'

function TimeBlock() {
  const [timeData, setTimeData] = useState('');

  useEffect(() => {
    let result =
    setInterval(() => {
     axios.get('http://worldtimeapi.org/api/ip').then(function (response) {
      result = response.data;
      setTimeData(result);
    })
  }, 1000)
  }, []);

  return(
    <div>
      <div className="px-12 lg:px-64 pb-32">
        <Greeting timeData={timeData.datetime}/>
        <CurrentTime timeData={timeData.datetime} timeAbbreviation={timeData.abbreviation} timeZone={ timeData.timezone }/>
      </div>
      <ExtraInfo hour={new Date(timeData.datetime).getHours()} timeZone={timeData.timezone} yearDay={timeData.day_of_year} weekDay={timeData.day_of_week} weekNumber={timeData.week_number}/>
    </div>
  )
}



export default TimeBlock