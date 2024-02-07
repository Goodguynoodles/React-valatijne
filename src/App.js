import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {

  const [open, setOpen] = useState(false)
  const handleYes = useCallback(() => {
    setOpen(true)
  },[])

  return (
    <div className="main">
      <header className="header">
       <h1>Will you be my valentijn</h1>
       <h1 className='back-letter'>Will you be my valentijn</h1>
      </header>
      <div className='button-group'>
      <button onMouseDown={handleYes} className='button'>Yes</button><button className='button no'>No</button>
      </div>
      {open && <p className='yippie'>yippie</p>}
    </div>
  );
}

export default App;
