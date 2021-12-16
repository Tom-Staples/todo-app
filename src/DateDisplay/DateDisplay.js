import React, { useEffect, useState } from 'react';

const DateDisplay = () => {
  const [dateTime, setDateTime] = useState({
    day: '',
    month: '',
    year: '',
    hours: '',
    minutes: ''
  });

  useEffect(() => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    setInterval(() => {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      setDateTime({
        day: day,
        month: months[month],
        year: year,
        hours: hours,
        minutes: minutes
      });
    }, 500);
  }, []);

  return (
    <div
      style={{
        fontSize: '0.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '100px'
      }}
    >
      <h2>{`${dateTime.day} ${dateTime.month} ${dateTime.year}`}</h2>
      <h2>{`${dateTime.hours}:${dateTime.minutes}`}</h2>
    </div>
  );
};

export default DateDisplay;
