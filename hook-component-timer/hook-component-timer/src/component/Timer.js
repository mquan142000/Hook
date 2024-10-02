import { useState, useEffect } from 'react';

const useCountDown = (initialSeconds) => {
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

    useEffect(() => {
        if (secondsLeft > 0) {
            const interval = setInterval(() => {
                setSecondsLeft((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [secondsLeft]);

    return secondsLeft;
};

const Timer = ({ initialSeconds }) => {
    const secondsLeft = useCountDown(initialSeconds);

    const getReturnValues = (secondsLeft) => {
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        return { minutes, seconds };
    };

    const { minutes, seconds } = getReturnValues(secondsLeft);

    return (
        <div>
            {secondsLeft > 0 ? (
                <p>Countdown: {minutes}m {seconds}s</p>
            ) : (
                alert("Time's Up!!")
            )}
        </div>
    );
};

export default Timer;
