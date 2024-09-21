import { useEffect, useState } from 'react'
import './App.css'
import Deck from './components/Deck';
import Timer from './components/Timer';
import StartScreen from './components/StartScreen';

function App() {
  const [gameStart , setGameStart] = useState(false);
  const [amount, setAmount ] = useState(5);

  const changeDifficulty = (diff) => {
    switch (diff) {
      case 'hard':
        setAmount(15);
        break;
      case 'medium':
        setAmount(10);
        break;
      default:
        setAmount(5);
        break;
    }

    setGameStart(true);
  };

  const changeGameStart = () => {
    setGameStart(!gameStart)
  }

  return (
    <>
      {/* <StartScreen setAmount={setAmount}/> */}
      {gameStart ? (
        <div className='wrapper'>
          <Timer onclick={changeGameStart}/>
          <Deck cards={amount} gameStart={changeGameStart}/>
        </div>
      ) : (
        <div className='start-screen'>
          <h1>Choose difficulty</h1>
          <div className="start-buttons">
            <button onClick={() => changeDifficulty('easy')}>easy</button>
            <button onClick={() => changeDifficulty('medium')}>medium</button>
            <button onClick={() => changeDifficulty('hard')}>hard</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
