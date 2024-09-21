import { useEffect, useState } from 'react'
import './App.css'
import Deck from './components/Deck';
import Timer from './components/Timer';
import EndScreen from './components/EndScreen';
import StartScreen from './components/StartScreen';

function App() {
  const [gameStart , setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [amount, setAmount ] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [lastTime, setLastTime] = useState(null);
  const [scoreBoard, setScoreBoard] = useState({
    easy: [],
    medium: [],
    hard: []
  });

  const changeDifficulty = (diff) => {
    switch (diff) {
      case 'hard':
        setAmount(15);
        setDifficulty('hard')
        break;
      case 'medium':
        setAmount(10);
        setDifficulty('medium')
        break;
      default:
        setAmount(5);
        setDifficulty('easy')
        break;
    }

    setGameStart(true);
  };

  const changeGameStart = () => {
    setGameStart(!gameStart)
  }

  const changeEndScreen = () => {
    setGameEnd(!gameEnd);
  }

  const changeLastTime = (time) => {
    setLastTime(time);
  }

  useEffect(() => {
    if(gameEnd && lastTime !== null){
      setScoreBoard((prevScoreBoard) => {
        const updatedScores = [...prevScoreBoard[difficulty], lastTime];
        updatedScores.sort((a,b) => b - a);

        return {
          ...prevScoreBoard,
          [difficulty]: updatedScores
        }
      })
    }
  }, [gameEnd, lastTime])

  return (
    <>
      {gameEnd ? (
        <EndScreen time={lastTime} scoreBoard={scoreBoard[difficulty]} gameEnd={changeEndScreen} lastTime={changeLastTime}/>
      ) : (
          gameStart ? (
            <div className='wrapper'>
              <Timer gameStart={changeGameStart} gameEnd={changeEndScreen} lastTime={changeLastTime}/>
              <Deck cards={amount} gameStart={changeGameStart} gameEnd={changeEndScreen}/>
            </div>
          ) : (
            <StartScreen onclick={changeDifficulty}/>
          )
      )}
    </>
  )
}

export default App
