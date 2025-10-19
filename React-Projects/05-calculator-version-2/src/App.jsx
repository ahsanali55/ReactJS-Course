import { useState } from 'react'
import Display from './components/Display'
import style from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText ) => {
      if (buttonText === 'C'){
        setCalVal('')

      }
      else if (buttonText === '='){
        setCalVal(eval(calVal))
      }
      else{
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue)
      }
  }
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
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick = {onButtonClick}
       buttonName={buttonName} />

     </div>
    </>
  )
}

export default App
