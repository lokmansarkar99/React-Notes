import {useState, useEffect} from 'react'

const DateTime = () => {

    const [dateTime, setDateTime] = useState('');

    // Update date and time every second
    useEffect(() => {
      const interval = setInterval(() => {
        const date = new Date();
        const formattedDate = date.toDateString();
        const formattedTime = date.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  return (
    <h2 className="date-time">{dateTime}</h2>
  )
}

export default DateTime
