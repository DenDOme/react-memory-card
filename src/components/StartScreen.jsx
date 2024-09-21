import '../assets/Screen.css';
function StartScreen({onclick}){
    return (
        <div className='start-screen'>
            <h1>Choose difficulty</h1>
            <div className="start-buttons">
            <button onClick={() => onclick('easy')}>easy</button>
            <button onClick={() => onclick('medium')}>medium</button>
            <button onClick={() => onclick('hard')}>hard</button>
            </div>
        </div>
    )
}

export default StartScreen