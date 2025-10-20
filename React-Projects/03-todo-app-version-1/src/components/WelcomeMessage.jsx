import style from "./WelcomeMessage.module.css";
import { ImHappy } from "react-icons/im";
function WelcomeMessage () {
    return (
    
    <h3 className={style.Nice} >Have a Nice Day!
    <span> <ImHappy  className={style.Happy}/></span>
    </h3>
   
    
);
}
export default WelcomeMessage;