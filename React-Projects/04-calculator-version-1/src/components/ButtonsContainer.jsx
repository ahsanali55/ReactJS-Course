import style from './ButtonsContainer.module.css';

const  ButtonsContainer = ({buttonName}) => {

    
  return (
    <>
      <div className={style.buttonsContainer}>
        {Array.from(buttonName).map(buttonnames => {
            return(
                <button className={style.button}>{buttonnames}</button>
            )
            })}
        
      </div>
    </>
  );
}
export default ButtonsContainer;