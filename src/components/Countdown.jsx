import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let left = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        left = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return left;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container animate-fade-in">
      <div className="countdown-item">
        <span className="countdown-number">
          {String(timeLeft.days).padStart(2, '0')}
        </span>
      </div>
      <div className="countdown-separator">
        <span className="separator-text vertical-text">DAYS</span>
      </div>
      
      <div className="countdown-item">
        <span className="countdown-number">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
      </div>
      <div className="countdown-separator">
        <span className="separator-text vertical-text">HOURS</span>
      </div>
      
      <div className="countdown-item">
        <span className="countdown-number">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
      </div>
      <div className="countdown-separator">
        <span className="separator-text vertical-text">MINS</span>
      </div>

      <div className="countdown-item">
        <span className="countdown-number seconds-highlight">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
      <div className="countdown-separator">
        <span className="separator-text vertical-text">SECS</span>
      </div>
    </div>
  );
};

export default Countdown;
