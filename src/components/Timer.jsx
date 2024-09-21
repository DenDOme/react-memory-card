import { useEffect, useState } from "react";

function Timer({gameStart, gameEnd, lastTime, loading}){
    const [time, setTime] = useState(180);
    const [run, setRun] = useState(true);

    useEffect(() => {
        let timer = null
        if(loading && run && time > 0){
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000)
        }

        return () => {
            if(timer){
                clearInterval(timer);
            }
        }
    }, [run, time, loading]);
    
    useEffect(() => {
        if(time <= 0){
            setRun(false);
            gameEnd();
            gameStart();
            lastTime(0);
        }
        lastTime(time);
    }, [time])

    return (
        <>
            <p>{Math.floor(time / 60)}:{ time % 60} seconds</p>
        </>
    )
}

export default Timer