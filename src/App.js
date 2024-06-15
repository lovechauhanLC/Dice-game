
import { useState } from 'react';
import Start from './components/Start';
import MainGame from './components/MainGame';



function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div>
    {
      isGameStarted ? <MainGame />:<Start toggle={toggleGamePlay}/>
    }
    </div>
  );
}

export default App;
