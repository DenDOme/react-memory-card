import { useState } from "react";

function EndScreen({time, scoreBoard, gameEnd, lastTime}){
    return (
        <div className="end-screen">  
            <h1>Game Over</h1>
            <p>it took you {Math.floor(time / 60)}:{ time % 60} seconds to solve this memory deck</p>
            {scoreBoard.map((score,index) => {
                return (<p key={index}>{index + 1} - {Math.floor(score / 60)}:{ score % 60} seconds</p>)
            })}
            <div className="end-buttons">
                <button onClick={() => {gameEnd(); lastTime(null)}}>restart</button>
            </div>
        </div>
    )
}

export default EndScreen