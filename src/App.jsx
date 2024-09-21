import { useEffect, useState } from 'react'
import './App.css'
import Deck from './components/Deck';
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

  return (
    <>
      {/* <StartScreen setAmount={setAmount}/> */}
      {gameStart ? (
        <Deck cards={amount} />
      ) : (
        <>
          <h1>Choose difficulty</h1>
          <div className="start-screen">
            <button onClick={() => changeDifficulty('easy')}>easy</button>
            <button onClick={() => changeDifficulty('medium')}>medium</button>
            <button onClick={() => changeDifficulty('hard')}>hard</button>
          </div>
        </>
      )}
    </>
  )
}

export default App
