import CurrentLocation from './Location'

function CurrentTime({timeData, timeAbbreviation, timeZone}) {

  let currentTime = new Date(timeData).toLocaleTimeString(undefined, {
    hour:   '2-digit',
    minute: '2-digit',
});

  return(
    <div>
      <div className="flex flex-row items-baseline">
        <p className="font-inter font-light text-white font-bold large-time">{`${ currentTime }` }</p>
        <p className="font-light font-inter tracking-widest text-white text-5xl">{` ${ timeAbbreviation }` }</p>
      </div>
      <CurrentLocation />
    </div>

  )
}

export default CurrentTime