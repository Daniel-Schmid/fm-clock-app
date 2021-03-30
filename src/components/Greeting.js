import sunIcon from '../assets/desktop/icon-sun.svg'
import moonIcon from '../assets/desktop/icon-moon.svg'

function Greeting({timeData}) {
  const morningGreeting = 'Good Morning'
  const afternoonGreeting = 'Good Evening'
  let currentHours = new Date(timeData).getHours()
  return(
    <div className="flex flex-row">
      <img className="mr-4" src={currentHours < 17 ? sunIcon : moonIcon } alt="time of day icon"/>
      <p className=" uppercase font-light tracking-widest text-white text-2xl md:text-3xl">{`${ currentHours < 17 ? morningGreeting : afternoonGreeting }, IT’S CURRENTLY`}</p>
    </div>
  )
}

export default Greeting