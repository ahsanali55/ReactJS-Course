import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { ImHappy } from "react-icons/im";
import { TodoItemsContext } from "../store/todo-items-store";


function WelcomeMessage () {

    const {todoItems} = useContext(TodoItemsContext)

    return ( (todoItems.length === 0) && ( 
    <h3 className={style.Nice} >Have a Nice Day!
    <span> <ImHappy  className={style.Happy}/></span>
    </h3>)
   
    
);
}
export default WelcomeMessage;