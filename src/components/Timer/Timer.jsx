import React from 'react';

import Button from '../Button';
import { forInStatement } from 'C:/Users/Serega/AppData/Local/Microsoft/TypeScript/3.6/node_modules/@babel/types/lib';

function useTimer(initialSeconds) {
    const tickRef = React.useRef();
    const intervalRef = React.useRef();
    const [seconds, setSeconds] = React.useState(initialSeconds);
    const [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        if (tickRef.current) return;

        tickRef.current = function tick() {
            setSeconds(seconds => {
                if (seconds > 0) {
                    const currentSeconds = seconds - 1;
                    return currentSeconds;
                } else {
                    setRunning(false);
                    return 0;
                }
            });
        };
    }, []);

    React.useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(tickRef.current, 1000);
        } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [running]);

    return {
        seconds,
        running, 
        setSeconds,
        setRunning
    };
}

export default function Timer() {
    const [time, setTime] = React.useState(60);
    const timer = useTimer();

    function handleStart() {
        timer.setSeconds(time);
        timer.setRunning(true);
    }

    function handlePause() {
        timer.setRunning(false);
    }

    function handleResume() {
        timer.setRunning(true);
    }

    function handleStop() {
        timer.setSeconds();
        timer.setRunning(false);
    }

    return (
        <section className="timer">
            {timer.seconds ?
                <>
                    <div className="timer-time">{format(timer.seconds)}</div>
                    <div className="timer-controls">
                        {timer.running ?
                            <Button className="icon" icon="pause" onClick={handlePause} />
                            :
                            <Button className="icon" icon="play_arrow" onClick={handleResume} />
                        }
                        
                        <Button className="icon" icon="stop" onClick={handleStop} />
                    </div>
                </>
                :
                <div>
                    <output className="timer-time">{format(time)}</output>
                    <div className="timer-controls">
                        <Button className="icon" icon="remove" onClick={() => setTime(time - 30)} />
                        <Button className="icon" icon="play_arrow" onClick={handleStart} />
                        <Button className="icon" icon="add" onClick={() => setTime(time + 30)} />
                    </div>
                </div>
            }
            

            
        </section>
    );

}

function format(totalSeconds) {
    //const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
}