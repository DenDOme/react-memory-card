import { useEffect, useState } from 'react'
import './App.css'
import Deck from './components/Deck';
import StartScreen from './components/StartScreen';

function App() {
  const [gameStart , setGameStart] = useState(false);
  const [amount, setAmount ] = useState(5);
  const [difficulty, setDifficulty ] = useState('easy');

  const changeDifficulty = (diff) => {
    setDifficulty(diff);
  }

  useEffect(() => {
    switch(difficulty){
      case 'hard': setAmount(10); break;
      case 'medium': setAmount(7);  break;
      default: setAmount(5); break;
    }

  },[difficulty])

  return (
    <>
      {/* <StartScreen setAmount={setAmount}/> */}
      {gameStart ? (
        <Deck cards={amount} />
      ) : (
        <>
          <h1>Choose difficulty</h1>
          <div className="start-screen">
            <button onClick={() => {changeDifficulty('easy'); setGameStart(true)}}>easy</button>
            <button onClick={() => {changeDifficulty('medium'); setGameStart(true)}}>medium</button>
            <button onClick={() => {changeDifficulty('hard'); setGameStart(true)}}>hard</button>
          </div>
        </>
      )}
    </>
  )
}

export default App
