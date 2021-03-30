import { useState, useEffect } from 'react';
import ArrowIcon from '../assets/desktop/icon-arrow-up.svg'

function ExtraInfo({timeZone, yearDay, weekDay, weekNumber, hour}) {
  const [expanded, setExpanded] = useState(false);
  const [isMorning, setisMorning] = useState(true);

  function handleExpand() {
    if(expanded) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  useEffect(() => {
    if(hour < 17) {
      setisMorning(true)
    } else {
      setisMorning(false)
    }
  }, [hour]);


  return(
    <div>

      <div className={`cursor-pointer bg-white max-w-max p-2 rounded-full justify-center items-center tracking-widest  flex flex-row absolute z-20 transform duration-400 ${expanded ? "extra-info-toggle" : "extra-info-toggle-active" }`} onClick={handleExpand}>
        <span className="font-inter text-xl py-2 px-4 w-24">{`${expanded ? "MORE" : "LESS" }`}</span>
        <img className={`h-12 transform duration-200 hover:text-gray-200 hover:opacity-50 ${expanded ? "rotate-180" : "rotate-0" }`} src={ArrowIcon} alt="arrow icon"/>
      </div>

      <div className={`w-screen py-32 lg:px-64 absolute bottom-0 left-0 flex flex-col lg:flex-row transform duration-500 px-16 ${expanded ? " opacity-0" : "opacity-70" } ${isMorning ? " bg-white" : "bg-black text-white" } `} style={{backdropFilter: "blur(20px)"}}>
          <div className="lg:w-6/12 mb-16 lg:mb-0">
            <p className="text-xl font-light tracking-widest mb-5">CURRENT TIMEZONE</p>
            <h3 className="text-7xl font-bold pb-16">{timeZone}</h3>
            <p className="text-xl font-light tracking-widest mb-5">DAY OF THE YEAR</p>
            <h3 className="text-7xl font-bold">{yearDay}</h3>
          </div>
          <div className="lg:w-5/12 lg:border-l lg:pl-32">
            <p className="text-xl font-light tracking-widest mb-5">DAY OF THE WEEK</p>
            <h3 className="text-7xl font-bold pb-16">{weekDay}</h3>
            <p className="text-xl font-light tracking-widest mb-5">WEEK NUMBER</p>
            <h3 className="text-7xl font-bold">{weekNumber}</h3>
          </div>
        </div>
        
    </div>

  )
}

export default ExtraInfo