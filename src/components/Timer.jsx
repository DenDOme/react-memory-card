import { useEffect, useState } from "react";

function Timer({onclick}){
    const [time, setTime] = useState(180);
    const [run, setRun] = useState(true);

    useEffect(() => {
        let timer = null
        if(run && time > 0){
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000)
        }

        return () => {
            if(timer){
                clearInterval(timer);
            }
        }
    }, [run, time]);
    
    useEffect(() => {
        if(time <= 0){
            setRun(false);
            onclick();
        }
    }, [time])

    return (
        <>
            <p>{Math.floor(time / 60)}:{ time % 60} seconds</p>
        </>
    )
}

export default Timer