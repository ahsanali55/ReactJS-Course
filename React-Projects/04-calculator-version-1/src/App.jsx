import { useState } from 'react'
import Display from './components/Display'
import style from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  const [count, setCount] = useState(0)
  const buttonName = [
        'C', '1', '2',
        '+', '3', '4',
        '-', '5', '6', 
        '*', '7', '8', 
        '/', '=', '9', 
        '0', '.' 
    ];

  return (
    <>
     <div className={style.calculator} >
      <Display />
      <ButtonsContainer buttonName={buttonName} />

     </div>
    </>
  )
}

export default App
