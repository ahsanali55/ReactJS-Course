import { useState } from 'react'
import MainHeading from './components/MainHeading';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center>
    <MainHeading/>
     <ClockSlogan/>
     <CurrentTime/>
    </center>
      
    </>
  )
}

export default App
