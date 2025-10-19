import style from './ButtonsContainer.module.css';

const  ButtonsContainer = ({buttonName, onButtonClick}) => {

    
  return (
    <>
      <div className={style.buttonsContainer}>
        {Array.from(buttonName).map(buttonname => {
            return(
                <button className={style.button} onClick={() => onButtonClick(buttonname)}>{buttonname}</button>
            )
            })}
        
      </div>
    </>
  );
}
export default ButtonsContainer;