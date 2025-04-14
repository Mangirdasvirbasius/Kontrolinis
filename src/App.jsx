import { useEffect, useState } from 'react'
import './App.css'
import namas from './Components/namas';

function App() {

   const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []
);
  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);
  
  return (
    <>





<namas/>
    </>
  )
}

export default App
